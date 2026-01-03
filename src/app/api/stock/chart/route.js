import { getFromCache, getStaleCache, setCache, retryWithBackoff, getOrCreateRequest } from '../../../../utils/cache';

// Get API key from environment variable
const TWELVE_DATA_API_KEY = process.env.NEXT_PUBLIC_TWELVE_DATA_API_KEY || process.env.TWELVE_DATA_API_KEY;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const exchange = searchParams.get('exchange') || 'nse';
    const period = searchParams.get('period') || '1mo';

    if (!TWELVE_DATA_API_KEY) {
      return Response.json(
        { error: 'Twelve Data API key not configured. Please set NEXT_PUBLIC_TWELVE_DATA_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    // NESCO stock symbols for Twelve Data
    // Try multiple formats as Twelve Data may use different symbol formats
    const symbolFormats = {
      nse: ['NESCO.NSE', 'NESCO', 'NESCO:NS'],  // Try NSE formats
      bse: ['NESCO.BSE', 'NESCO', 'NESCO:BO'],  // Try BSE formats
    };

    const formats = symbolFormats[exchange.toLowerCase()];
    if (!formats) {
      return Response.json(
        { error: 'Invalid exchange. Use "nse" or "bse"' },
        { status: 400 }
      );
    }

    // Check cache first (use first format for cache key)
    const primarySymbol = formats[0];
    const cacheKey = `chart_${exchange}_${primarySymbol}_${period}`;
    const cachedData = getFromCache(cacheKey);
    if (cachedData) {
      return Response.json({ ...cachedData, fromCache: true });
    }

    console.log(`Fetching chart for exchange: ${exchange}, period: ${period} from Twelve Data`);

    // Map periods to Twelve Data intervals
    const periodMap = {
      '1d': { interval: '5min', outputsize: 288 }, // 5min intervals for 1 day
      '5d': { interval: '30min', outputsize: 240 }, // 30min intervals for 5 days
      '1mo': { interval: '1day', outputsize: 30 },
      '3mo': { interval: '1day', outputsize: 90 },
      '6mo': { interval: '1day', outputsize: 180 },
      '1y': { interval: '1day', outputsize: 365 },
      '2y': { interval: '1week', outputsize: 104 },
      '5y': { interval: '1week', outputsize: 260 },
      '10y': { interval: '1month', outputsize: 120 },
      'ytd': { interval: '1day', outputsize: 365 },
      'max': { interval: '1month', outputsize: 120 },
    };

    const config = periodMap[period] || periodMap['1mo'];

    // Use getOrCreateRequest to deduplicate simultaneous requests
    try {
      const data = await getOrCreateRequest(cacheKey, async () => {
        // Try each symbol format until one works
        let lastError = null;
        for (const symbol of formats) {
          try {
            return await retryWithBackoff(async () => {
              const url = `https://api.twelvedata.com/time_series?symbol=${encodeURIComponent(symbol)}&interval=${config.interval}&outputsize=${config.outputsize}&apikey=${TWELVE_DATA_API_KEY}`;
              const response = await fetch(url);
              
              if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Twelve Data API error: ${response.status} - ${errorText}`);
              }
              
              const jsonData = await response.json();
              
              // Check if API returned an error
              if (jsonData.status === 'error') {
                throw new Error(jsonData.message || 'Twelve Data API error');
              }
              
              // Transform Twelve Data response to match expected format
              const transformed = transformTwelveDataChart(jsonData);
              return { ...transformed, symbol };
            }, 2, 2000);
          } catch (error) {
            lastError = error;
            console.log(`Symbol format ${symbol} failed, trying next format...`);
            continue;
          }
        }
        // If all formats failed, throw the last error
        throw lastError || new Error('All symbol formats failed');
      });

      const responseData = {
        quotes: data.quotes || [],
        symbol: data.symbol || primarySymbol,
      };

    // Cache the result
    setCache(cacheKey, responseData, 'chart');

    console.log(`Chart data fetched successfully for ${symbol}`);
    
    return Response.json(responseData);
    } catch (apiError) {
      // If API fails, try to return stale cache as fallback
      const staleData = getStaleCache(cacheKey, 4 * 60 * 60 * 1000); // Accept up to 4 hours old data
      
      if (staleData) {
        console.log(`API failed, returning stale cache for ${symbol}`);
        return Response.json({ 
          ...staleData, 
          fromCache: true, 
          stale: true,
          warning: 'Using cached data due to API rate limiting'
        });
      }
      
      // Re-throw if no stale cache available
      throw apiError;
    }
  } catch (error) {
    console.error('Error fetching chart data:', error.message);
    console.error('Full error:', error);
    
    // Check for rate limit errors more thoroughly
    const isRateLimited = 
      error.status === 429 || 
      error.statusCode === 429 ||
      (error.message && error.message.includes('429')) ||
      (error.message && error.message.includes('Too Many Requests')) ||
      (error.message && error.message.includes('rate limit'));
    
    const statusCode = error.code || error.status || error.statusCode || 500;
    
    return Response.json(
      { 
        error: isRateLimited 
          ? 'Rate limited by data provider. Please try again later. The API is temporarily unavailable.'
          : 'Failed to fetch chart data', 
        details: error.message,
        statusCode: isRateLimited ? 429 : statusCode,
      },
      { status: isRateLimited ? 429 : 500 }
    );
  }
}

/**
 * Transform Twelve Data time series response to match expected format
 * @param {Object} data - Twelve Data API response
 * @returns {Object} Transformed data with quotes array
 */
function transformTwelveDataChart(data) {
  if (!data.values || !Array.isArray(data.values)) {
    return { quotes: [] };
  }

  // Twelve Data returns values in reverse chronological order (newest first)
  // We need to reverse it to get chronological order (oldest first)
  const quotes = data.values
    .reverse()
    .map((item) => ({
      date: item.datetime,
      open: parseFloat(item.open) || 0,
      high: parseFloat(item.high) || 0,
      low: parseFloat(item.low) || 0,
      close: parseFloat(item.close) || 0,
      volume: parseInt(item.volume) || 0,
    }));

  return { quotes };
}

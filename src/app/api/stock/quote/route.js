import { getFromCache, getStaleCache, setCache, retryWithBackoff, getOrCreateRequest } from '../../../../utils/cache';

// Get API key from environment variable
const TWELVE_DATA_API_KEY = process.env.NEXT_PUBLIC_TWELVE_DATA_API_KEY || process.env.TWELVE_DATA_API_KEY;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const exchange = searchParams.get('exchange') || 'nse';

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
    const cacheKey = `quote_${exchange}_${primarySymbol}`;
    const cachedData = getFromCache(cacheKey);
    if (cachedData) {
      return Response.json({ ...cachedData, fromCache: true });
    }

    console.log(`Fetching quote for exchange: ${exchange} from Twelve Data`);
    
    // Use getOrCreateRequest to deduplicate simultaneous requests
    try {
      const data = await getOrCreateRequest(cacheKey, async () => {
        // Try each symbol format until one works
        let lastError = null;
        for (const symbol of formats) {
          try {
            return await retryWithBackoff(async () => {
              const url = `https://api.twelvedata.com/quote?symbol=${encodeURIComponent(symbol)}&apikey=${TWELVE_DATA_API_KEY}`;
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
              return transformTwelveDataQuote(jsonData);
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

      // Cache the result
      setCache(cacheKey, data, 'quote');

      console.log(`Quote data fetched successfully for ${symbol}`);
      return Response.json(data);
    } catch (apiError) {
      // If API fails, try to return stale cache as fallback
      const staleData = getStaleCache(cacheKey, 2 * 60 * 60 * 1000); // Accept up to 2 hours old data
      
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
    console.error('Error fetching stock quote:', error.message);
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
          : 'Failed to fetch stock data', 
        details: error.message,
        statusCode: isRateLimited ? 429 : statusCode,
      },
      { status: isRateLimited ? 429 : 500 }
    );
  }
}

/**
 * Transform Twelve Data quote response to match Yahoo Finance format
 * @param {Object} data - Twelve Data API response
 * @returns {Object} Transformed data
 */
function transformTwelveDataQuote(data) {
  return {
    symbol: data.symbol,
    regularMarketPrice: parseFloat(data.close) || 0,
    regularMarketPreviousClose: parseFloat(data.previous_close) || 0,
    regularMarketOpen: parseFloat(data.open) || 0,
    regularMarketDayHigh: parseFloat(data.high) || 0,
    regularMarketDayLow: parseFloat(data.low) || 0,
    regularMarketVolume: parseInt(data.volume) || 0,
    fiftyTwoWeekHigh: parseFloat(data.fifty_two_week?.high) || parseFloat(data.high) || 0,
    fiftyTwoWeekLow: parseFloat(data.fifty_two_week?.low) || parseFloat(data.low) || 0,
    currency: data.currency || 'INR',
    exchange: data.exchange,
    name: data.name,
    datetime: data.datetime,
  };
}

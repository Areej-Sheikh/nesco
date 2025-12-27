import YahooFinance from 'yahoo-finance2';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const exchange = searchParams.get('exchange') || 'nse';
    const period = searchParams.get('period') || '1mo';

    // NESCO stock symbols
    const symbols = {
      nse: 'NESCO.NS',
      bse: 'NESCO.BO',
    };

    const symbol = symbols[exchange.toLowerCase()];
    if (!symbol) {
      return Response.json(
        { error: 'Invalid exchange. Use "nse" or "bse"' },
        { status: 400 }
      );
    }

    console.log(`Fetching chart for symbol: ${symbol}, period: ${period}`);

    // Map periods to date ranges
    const periodMap = {
      '1d': { days: 1, interval: '5m' },
      '5d': { days: 5, interval: '15m' },
      '1mo': { days: 30, interval: '1d' },
      '3mo': { days: 90, interval: '1d' },
      '6mo': { days: 180, interval: '1d' },
      '1y': { days: 365, interval: '1d' },
      '2y': { days: 730, interval: '1d' },
      '5y': { days: 1825, interval: '1d' },
      '10y': { days: 3650, interval: '1d' },
      'ytd': { days: 365, interval: '1d' },
      'max': { days: 3650, interval: '1d' },
    };

    const config = periodMap[period] || periodMap['1mo'];
    const now = new Date();
    const startDate = new Date(now);
    startDate.setDate(startDate.getDate() - config.days);

    const yahooFinance = new YahooFinance();
    const data = await yahooFinance.chart(symbol, {
      period1: startDate,
      period2: now,
      interval: config.interval,
    });

    console.log(`Chart data fetched successfully for ${symbol}`);
    
    return Response.json({
      quotes: data.quotes || [],
      symbol: symbol,
    });
  } catch (error) {
    console.error('Error fetching chart data:', error.message);
    console.error('Full error:', error);
    return Response.json(
      { 
        error: 'Failed to fetch chart data', 
        details: error.message,
        stack: error.stack 
      },
      { status: 500 }
    );
  }
}

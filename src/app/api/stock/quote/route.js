import YahooFinance from 'yahoo-finance2';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const exchange = searchParams.get('exchange') || 'nse';

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

    console.log(`Fetching quote for symbol: ${symbol}`);
    
    const yahooFinance = new YahooFinance();
    const data = await yahooFinance.quote(symbol);

    console.log(`Quote data fetched successfully for ${symbol}`);
    return Response.json(data);
  } catch (error) {
    console.error('Error fetching stock quote:', error.message);
    console.error('Full error:', error);
    return Response.json(
      { 
        error: 'Failed to fetch stock data', 
        details: error.message,
        stack: error.stack 
      },
      { status: 500 }
    );
  }
}

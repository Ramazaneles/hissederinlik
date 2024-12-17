import { stockSymbols, mockStockData } from '../constants/stockSymbols';

export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: number;
  marketCap: string;
  sector: string;
}

export const fetchStockData = async (symbol: string): Promise<StockData> => {
  try {
    const response = await fetch(`https://api.stockhisse.com/stocks/overview/?symbol=${symbol}&format=json`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    return {
      symbol: symbol.replace('.IS', ''),
      name: data.name || 'Unknown',
      price: parseFloat(data.price) || 0,
      change: parseFloat(data.change) || 0,
      volume: parseInt(data.volume) || 0,
      marketCap: data.marketCap || '0',
      sector: data.sector || 'Unknown'
    };
  } catch (error) {
    const mockData = mockStockData[symbol];
    if (!mockData) {
      throw new Error(`No mock data available for ${symbol}`);
    }
    
    return {
      symbol: symbol.replace('.IS', ''),
      ...mockData
    };
  }
};

export const fetchAllStocks = async (): Promise<StockData[]> => {
  const promises = stockSymbols.map(symbol => fetchStockData(symbol));
  return Promise.all(promises);
};
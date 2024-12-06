import { StockSearch } from "@/components/StockSearch";
import { StockCard } from "@/components/StockCard";

const mockStocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 173.50, change: 1.23 },
  { symbol: "MSFT", name: "Microsoft Corporation", price: 338.45, change: -0.45 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 131.20, change: 0.89 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 127.90, change: -1.15 },
];

const Index = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 animate-fade-in">Market Overview</h1>
        
        <div className="mb-8 animate-slide-in">
          <StockSearch />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockStocks.map((stock) => (
            <StockCard key={stock.symbol} {...stock} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
import { StockCard } from "./StockCard";
import { ScrollArea } from "./ui/scroll-area";

const mockStocks = [
  { symbol: "VRGYO", name: "Vakıf REIT", price: 19.54, change: 2.45 },
  { symbol: "GARAN", name: "Garanti Bank", price: 42.16, change: -1.23 },
  { symbol: "THYAO", name: "Turkish Airlines", price: 158.90, change: 3.78 },
  { symbol: "ASELS", name: "Aselsan", price: 45.82, change: 0.92 },
  { symbol: "KCHOL", name: "Koç Holding", price: 210.50, change: -0.45 },
  { symbol: "EREGL", name: "Ereğli Iron", price: 38.64, change: 1.56 },
  { symbol: "BIMAS", name: "BIM Markets", price: 145.30, change: -2.10 },
  { symbol: "AKBNK", name: "Akbank", price: 33.92, change: 1.87 },
  { symbol: "SISE", name: "Şişe Cam", price: 42.78, change: 0.68 },
  { symbol: "TUPRS", name: "Tüpraş", price: 187.45, change: 4.23 },
];

interface StockGridProps {
  onStockSelect: (symbol: string) => void;
}

export const StockGrid = ({ onStockSelect }: StockGridProps) => {
  return (
    <ScrollArea className="h-[calc(100vh-16rem)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {mockStocks.map((stock) => (
          <StockCard 
            key={stock.symbol} 
            {...stock} 
            onClick={() => onStockSelect(stock.symbol)}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
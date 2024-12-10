import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendingStocksProps {
  className?: string;
  onStockSelect: (symbol: string) => void;
}

export const TrendingStocks = ({ className, onStockSelect }: TrendingStocksProps) => {
  const trendingStocks = [
    { symbol: "THYAO", name: "Türk Hava Yolları", change: 2.45 },
    { symbol: "GARAN", name: "Garanti Bankası", change: 1.78 },
    { symbol: "ASELS", name: "Aselsan", change: 3.12 },
    { symbol: "EREGL", name: "Ereğli Demir Çelik", change: 0.95 },
  ];

  return (
    <div className={cn("card", className)}>
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Trend Hisseler</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trendingStocks.map((stock) => (
          <button
            key={stock.symbol}
            onClick={() => onStockSelect(stock.symbol)}
            className="p-4 rounded-lg bg-background hover:bg-card transition-colors text-left"
          >
            <div className="font-bold text-lg">{stock.symbol}</div>
            <div className="text-sm text-muted">{stock.name}</div>
            <div className="text-success mt-2">+{stock.change}%</div>
          </button>
        ))}
      </div>
    </div>
  );
};
import { useState } from "react";
import { StockCard } from "./StockCard";
import { ScrollArea } from "./ui/scroll-area";
import { ArrowUpDown, TrendingUp, TrendingDown, Volume2 } from 'lucide-react';
import { Button } from "./ui/button";
import { Helmet } from "react-helmet";

// Genişletilmiş mock veri
const mockStocks = [
  { symbol: "THYAO", name: "Türk Hava Yolları", price: 158.90, change: 3.78, volume: 1245678, marketCap: "158.9B", sector: "Ulaştırma" },
  { symbol: "GARAN", name: "Garanti Bankası", price: 42.16, change: -1.23, volume: 987654, marketCap: "42.1B", sector: "Bankacılık" },
  { symbol: "ASELS", name: "Aselsan", price: 45.82, change: 0.92, volume: 456789, marketCap: "45.8B", sector: "Savunma" },
  { symbol: "KCHOL", name: "Koç Holding", price: 210.50, change: -0.45, volume: 234567, marketCap: "210.5B", sector: "Holding" },
  { symbol: "EREGL", name: "Ereğli Demir Çelik", price: 38.64, change: 1.56, volume: 789012, marketCap: "38.6B", sector: "Demir-Çelik" },
  { symbol: "BIMAS", name: "BİM Mağazalar", price: 145.30, change: -2.10, volume: 345678, marketCap: "145.3B", sector: "Perakende" },
  { symbol: "AKBNK", name: "Akbank", price: 33.92, change: 1.87, volume: 567890, marketCap: "33.9B", sector: "Bankacılık" },
  { symbol: "SISE", name: "Şişe Cam", price: 42.78, change: 0.68, volume: 123456, marketCap: "42.7B", sector: "Cam" },
  { symbol: "TUPRS", name: "Tüpraş", price: 187.45, change: 4.23, volume: 890123, marketCap: "187.4B", sector: "Enerji" },
  { symbol: "SAHOL", name: "Sabancı Holding", price: 54.60, change: 2.15, volume: 432109, marketCap: "54.6B", sector: "Holding" },
  // ... 40 hisse daha eklenecek
];

type SortField = "price" | "change" | "volume" | "marketCap";

interface StockGridProps {
  onStockSelect: (symbol: string) => void;
}

export const StockGrid = ({ onStockSelect }: StockGridProps) => {
  const [sortField, setSortField] = useState<SortField>("price");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [filter, setFilter] = useState<string>("");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedStocks = [...mockStocks]
    .filter(stock => 
      stock.symbol.toLowerCase().includes(filter.toLowerCase()) ||
      stock.name.toLowerCase().includes(filter.toLowerCase()) ||
      stock.sector.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      const multiplier = sortDirection === "asc" ? 1 : -1;
      const aValue = a[sortField];
      const bValue = b[sortField];
      return (aValue - bValue) * multiplier;
    });

  return (
    <>
      <Helmet>
        <title>Borsa İstanbul Hisse Senetleri | Canlı Borsa Takibi</title>
        <meta name="description" content="Borsa İstanbul (BIST) hisse senetleri, canlı fiyatlar, değişim oranları ve hacim bilgileri. En güncel borsa verileri." />
        <meta name="keywords" content="borsa istanbul, bist, hisse senetleri, borsa, thyao, garan, bist 100, canlı borsa" />
      </Helmet>

      <div className="mb-4 space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Hisse, Sektör veya Şirket Ara..."
            className="flex-1 input"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSort("price")}
            className={sortField === "price" ? "bg-primary/10" : ""}
          >
            <ArrowUpDown className="h-4 w-4 mr-1" />
            Fiyat
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSort("change")}
            className={sortField === "change" ? "bg-primary/10" : ""}
          >
            {sortDirection === "asc" ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 mr-1" />
            )}
            Değişim
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSort("volume")}
            className={sortField === "volume" ? "bg-primary/10" : ""}
          >
            <Volume2 className="h-4 w-4 mr-1" />
            Hacim
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {sortedStocks.map((stock) => (
            <StockCard 
              key={stock.symbol} 
              {...stock} 
              onClick={() => onStockSelect(stock.symbol)}
            />
          ))}
        </div>
      </ScrollArea>
    </>
  );
};
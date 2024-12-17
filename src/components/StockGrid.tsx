import { useState } from "react";
import { StockCard } from "./StockCard";
import { ScrollArea } from "./ui/scroll-area";
import { ArrowUpDown, TrendingUp, TrendingDown, Volume2 } from 'lucide-react';
import { Button } from "./ui/button";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";

// Turkish stock symbols array
const stockSymbols = [
  "THYAO.IS", "GARAN.IS", "ASELS.IS", "KCHOL.IS", "EREGL.IS", 
  "BIMAS.IS", "AKBNK.IS", "SISE.IS", "TUPRS.IS", "SAHOL.IS",
  "SASA.IS", "YKBNK.IS", "PGSUS.IS", "TAVHL.IS", "TOASO.IS"
];

interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: number;
  marketCap: string;
  sector: string;
}

interface StockGridProps {
  onStockSelect: (symbol: string) => void;
}

const fetchStockData = async (symbol: string): Promise<StockData> => {
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
    console.error(`Error fetching data for ${symbol}:`, error);
    throw error;
  }
};

export const StockGrid = ({ onStockSelect }: StockGridProps) => {
  const [sortField, setSortField] = useState<"price" | "change" | "volume">("price");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [filter, setFilter] = useState<string>("");

  const { data: stocks = [], isLoading, error } = useQuery({
    queryKey: ['stocks'],
    queryFn: async () => {
      const promises = stockSymbols.map(symbol => fetchStockData(symbol));
      return Promise.all(promises);
    },
  });

  const handleSort = (field: "price" | "change" | "volume") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedStocks = [...stocks]
    .filter(stock => 
      stock.symbol.toLowerCase().includes(filter.toLowerCase()) ||
      stock.name.toLowerCase().includes(filter.toLowerCase()) ||
      stock.sector.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      const multiplier = sortDirection === "asc" ? 1 : -1;
      return (Number(a[sortField]) - Number(b[sortField])) * multiplier;
    });

  if (isLoading) {
    return <div className="p-4 text-center">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Veri yüklenirken bir hata oluştu.</div>;
  }

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

      <ScrollArea>
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
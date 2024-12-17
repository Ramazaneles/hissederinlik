import { useState } from "react";
import { StockCard } from "./StockCard";
import { ScrollArea } from "./ui/scroll-area";
import { ArrowUpDown, TrendingUp, TrendingDown, Volume2 } from 'lucide-react';
import { Button } from "./ui/button";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "./ui/use-toast";

// Turkish stock symbols array
const stockSymbols = [
  "THYAO.IS", "GARAN.IS", "ASELS.IS", "KCHOL.IS", "EREGL.IS", 
  "BIMAS.IS", "AKBNK.IS", "SISE.IS", "TUPRS.IS", "SAHOL.IS",
  "SASA.IS", "YKBNK.IS", "PGSUS.IS", "TAVHL.IS", "TOASO.IS"
];

// Fallback mock data
const mockStockData = {
  "THYAO.IS": { name: "Türk Hava Yolları", price: 245.80, change: 1.2, volume: 1234567, marketCap: "85.4B", sector: "Ulaştırma" },
  "GARAN.IS": { name: "Garanti Bankası", price: 54.25, change: -0.8, volume: 987654, marketCap: "45.2B", sector: "Bankacılık" },
  "ASELS.IS": { name: "Aselsan", price: 33.42, change: 0.5, volume: 456789, marketCap: "30.1B", sector: "Savunma" },
  "KCHOL.IS": { name: "Koç Holding", price: 122.90, change: 2.1, volume: 345678, marketCap: "75.3B", sector: "Holding" },
  "EREGL.IS": { name: "Ereğli Demir Çelik", price: 42.68, change: -1.2, volume: 234567, marketCap: "38.6B", sector: "Demir-Çelik" },
  "BIMAS.IS": { name: "BİM Mağazalar", price: 151.30, change: 0.3, volume: 123456, marketCap: "42.8B", sector: "Perakende" },
  "AKBNK.IS": { name: "Akbank", price: 44.86, change: -0.4, volume: 876543, marketCap: "35.7B", sector: "Bankacılık" },
  "SISE.IS": { name: "Şişe Cam", price: 35.24, change: 1.5, volume: 765432, marketCap: "25.4B", sector: "Cam" },
  "TUPRS.IS": { name: "Tüpraş", price: 178.50, change: 2.8, volume: 654321, marketCap: "55.9B", sector: "Enerji" },
  "SAHOL.IS": { name: "Sabancı Holding", price: 68.15, change: -0.6, volume: 543210, marketCap: "48.2B", sector: "Holding" },
  "SASA.IS": { name: "SASA Polyester", price: 58.90, change: 1.7, volume: 432109, marketCap: "28.3B", sector: "Kimya" },
  "YKBNK.IS": { name: "Yapı Kredi", price: 38.46, change: 0.9, volume: 321098, marketCap: "32.5B", sector: "Bankacılık" },
  "PGSUS.IS": { name: "Pegasus", price: 188.70, change: -1.8, volume: 210987, marketCap: "22.1B", sector: "Ulaştırma" },
  "TAVHL.IS": { name: "TAV Havalimanları", price: 91.35, change: 1.1, volume: 109876, marketCap: "18.7B", sector: "Ulaştırma" },
  "TOASO.IS": { name: "Tofaş Oto", price: 144.20, change: 0.7, volume: 98765, marketCap: "29.6B", sector: "Otomotiv" }
};

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
    // First try to fetch from API
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
    // If API fails, use mock data
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

export const StockGrid = ({ onStockSelect }: StockGridProps) => {
  const [sortField, setSortField] = useState<"price" | "change" | "volume">("price");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [filter, setFilter] = useState<string>("");
  const { toast } = useToast();

  const { data: stocks = [], isLoading } = useQuery({
    queryKey: ['stocks'],
    queryFn: async () => {
      const promises = stockSymbols.map(symbol => fetchStockData(symbol));
      try {
        return await Promise.all(promises);
      } catch (error) {
        toast({
          title: "Veri yükleme hatası",
          description: "Veriler geçici olarak mock data üzerinden gösterilmektedir.",
          variant: "destructive",
        });
        // Return mock data if API fails
        return stockSymbols.map(symbol => ({
          symbol: symbol.replace('.IS', ''),
          ...mockStockData[symbol]
        }));
      }
    },
    retry: 1, // Only retry once
    refetchOnWindowFocus: false, // Disable refetching on window focus
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
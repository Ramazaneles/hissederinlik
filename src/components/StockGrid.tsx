import { useState } from "react";
import { StockCard } from "./StockCard";
import { ScrollArea } from "./ui/scroll-area";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "./ui/use-toast";
import { StockFilters } from "./stock/StockFilters";
import { fetchAllStocks } from "../services/stockApi";
import { stockSymbols, mockStockData } from "../constants/stockSymbols";

interface StockGridProps {
  onStockSelect: (symbol: string) => void;
}

export const StockGrid = ({ onStockSelect }: StockGridProps) => {
  const [sortField, setSortField] = useState<"price" | "change" | "volume">("price");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [filter, setFilter] = useState<string>("");
  const { toast } = useToast();

  const { data: stocks = [], isLoading } = useQuery({
    queryKey: ['stocks'],
    queryFn: async () => {
      try {
        return await fetchAllStocks();
      } catch (error) {
        toast({
          title: "Veri yükleme hatası",
          description: "Veriler geçici olarak mock data üzerinden gösterilmektedir.",
          variant: "destructive",
        });
        return stockSymbols.map(symbol => ({
          symbol: symbol.replace('.IS', ''),
          ...mockStockData[symbol]
        }));
      }
    },
    retry: 1,
    refetchOnWindowFocus: false,
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

      <StockFilters
        sortField={sortField}
        sortDirection={sortDirection}
        filter={filter}
        onFilterChange={setFilter}
        onSort={handleSort}
      />

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
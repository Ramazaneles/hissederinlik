import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StockSearch } from "@/components/StockSearch";
import { StockGrid } from "@/components/StockGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MarketSummary } from "@/components/market/MarketSummary";
import { StockDetails } from "@/components/stock/StockDetails";
import { StockPageSEO } from "@/components/seo/StockPageSEO";
import { StockActions } from "@/components/stock/StockActions";
import BlogSection from "@/components/blog/BlogSection";
import { TrendingStocks } from "@/components/market/TrendingStocks";
import { MarketNews } from "@/components/market/MarketNews";

// Mock depth data
const mockBuyOrders = [
  { orderCount: 9, lot: 17951, price: 19.54 },
  { orderCount: 22, lot: 12556, price: 19.53 },
  { orderCount: 12, lot: 13444, price: 19.52 },
  { orderCount: 21, lot: 26592, price: 19.51 },
  { orderCount: 63, lot: 57636, price: 19.50 },
  { orderCount: 11, lot: 318, price: 19.49 },
  { orderCount: 13, lot: 1173, price: 19.48 },
  { orderCount: 12, lot: 15986, price: 19.47 },
  { orderCount: 8, lot: 7653, price: 19.46 },
  { orderCount: 31, lot: 6410, price: 19.45 },
];

const mockSellOrders = [
  { orderCount: 38, lot: 11831, price: 19.55 },
  { orderCount: 58, lot: 4165, price: 19.56 },
  { orderCount: 28, lot: 294, price: 19.57 },
  { orderCount: 59, lot: 4833, price: 19.58 },
  { orderCount: 66, lot: 11403, price: 19.59 },
  { orderCount: 73, lot: 4915, price: 19.60 },
  { orderCount: 75, lot: 823, price: 19.61 },
  { orderCount: 55, lot: 5635, price: 19.62 },
  { orderCount: 44, lot: 5368, price: 19.63 },
  { orderCount: 35, lot: 1361, price: 19.64 },
];

const Index = () => {
  const { stock } = useParams();
  const navigate = useNavigate();
  const [selectedStock, setSelectedStock] = useState<string | null>(null);

  useEffect(() => {
    if (stock) {
      setSelectedStock(stock.toUpperCase());
    } else {
      setSelectedStock(null);
    }
  }, [stock]);

  const getStockDetails = (symbol: string) => ({
    name: symbol === "VRGYO" ? "Vakıf REIT" : 
          symbol === "GARAN" ? "Garanti Bank" :
          symbol === "THYAO" ? "Turkish Airlines" : "Unknown Company",
    price: 19.54,
    change: 2.45,
    volume: 1234567,
    marketCap: "5.2B",
    dayRange: "19.12 - 19.86",
    yearRange: "15.30 - 22.45",
    avgVolume: 987654,
    lastUpdated: "14:23:45",
    pe: 8.45,
    eps: 2.31,
    dividend: "1.85%",
    beta: 1.24
  });

  const handleStockSelect = (symbol: string) => {
    navigate(`/${symbol.toLowerCase()}`);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const stockDetails = selectedStock ? getStockDetails(selectedStock) : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <StockPageSEO symbol={selectedStock || ""} details={stockDetails} />
      <Header />
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4">
          {!selectedStock && (
            <>
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                  Borsa İstanbul Canlı Takip
                </h1>
                <p className="text-muted text-lg mb-8">
                  BIST hisse senetleri için anlık fiyatlar, derinlik analizi ve teknik veriler
                </p>
                <StockSearch onSelect={handleStockSelect} />
              </div>
              
              <MarketSummary />
              
              <TrendingStocks className="mb-12" onStockSelect={handleStockSelect} />
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card">
                  <h2 className="text-2xl font-bold mb-4">En Çok İşlem Görenler</h2>
                  <StockGrid onStockSelect={handleStockSelect} />
                </div>
                
                <div className="card">
                  <h2 className="text-2xl font-bold mb-4">Günün Kazandıranları</h2>
                  <StockGrid onStockSelect={handleStockSelect} filter="gainers" />
                </div>
              </div>
              
              <MarketNews className="mb-12" />
              
              <BlogSection />
            </>
          )}

          {selectedStock && stockDetails && (
            <StockDetails 
              symbol={selectedStock}
              details={stockDetails}
              buyOrders={mockBuyOrders}
              sellOrders={mockSellOrders}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

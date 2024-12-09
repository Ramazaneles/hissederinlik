import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StockSearch } from "@/components/StockSearch";
import { StockDepthTable } from "@/components/StockDepthTable";
import { StockGrid } from "@/components/StockGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MarketSummary } from "@/components/market/MarketSummary";
import { StockMetrics } from "@/components/stock/StockMetrics";
import { StockHeader } from "@/components/stock/StockHeader";
import { StockActions } from "@/components/stock/StockActions";
import { Helmet } from "react-helmet";

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

  // Mock stock details data - in real app this would come from an API
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

  const getStockTitle = (symbol: string, details: any) => {
    const changeText = details.change >= 0 ? "Yükselişte" : "Düşüşte";
    const changeAmount = Math.abs(details.change).toFixed(2);
    const priceFormatted = details.price.toFixed(2);
    
    return `${symbol} ${details.name} Hisse Analizi | ${priceFormatted}₺ | %${changeAmount} ${changeText} | BIST`;
  };

  const getStockDescription = (symbol: string, details: any) => {
    const changeText = details.change >= 0 ? "yükseliş" : "düşüş";
    const volumeFormatted = details.volume.toLocaleString();
    return `${symbol} (${details.name}) hisse senedi anlık fiyat: ${details.price}₺, günlük ${changeText}: %${Math.abs(details.change).toFixed(2)}, işlem hacmi: ${volumeFormatted}. Canlı borsa verileri, teknik analiz ve detaylı bilgiler.`;
  };

  const getStockKeywords = (symbol: string, details: any) => {
    return `${symbol}, ${details.name}, ${symbol} hisse, borsa istanbul, bist, ${symbol} analiz, ${symbol} teknik analiz, ${symbol} hisse analizi, borsa, hisse senedi`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {selectedStock && stockDetails ? (
        <Helmet>
          <title>{getStockTitle(selectedStock, stockDetails)}</title>
          <meta name="description" content={getStockDescription(selectedStock, stockDetails)} />
          <meta name="keywords" content={getStockKeywords(selectedStock, stockDetails)} />
        </Helmet>
      ) : (
        <Helmet>
          <title>Borsa İstanbul (BIST) Hisse Senetleri | Canlı Borsa Takibi ve Analiz</title>
          <meta name="description" content="Borsa İstanbul (BIST) hisse senetleri canlı takip, anlık fiyatlar, değişim oranları ve hacim bilgileri. En güncel borsa verileri ve teknik analizler." />
          <meta name="keywords" content="borsa istanbul, bist, bist 100, hisse senetleri, borsa, canlı borsa, borsa analiz, hisse analiz, thyao, garan, bist analiz" />
        </Helmet>
      )}

      <Header />
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4">
          {!selectedStock && <MarketSummary />}

          <div className="flex items-center justify-between mb-6 bg-card rounded-lg p-4">
            {selectedStock ? (
              <button 
                className="text-muted hover:text-foreground transition-colors"
                onClick={handleBackClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
            ) : (
              <div className="w-6" />
            )}
            <div className="flex-1 mx-4">
              <StockSearch defaultValue={selectedStock || ""} />
            </div>
            {selectedStock && <StockActions />}
          </div>

          {selectedStock && stockDetails ? (
            <div className="space-y-4">
              <div className="card">
                <StockHeader 
                  symbol={selectedStock}
                  name={stockDetails.name}
                  price={stockDetails.price}
                  change={stockDetails.change}
                />
                <StockMetrics details={stockDetails} />
              </div>
              <StockDepthTable buyOrders={mockBuyOrders} sellOrders={mockSellOrders} />
            </div>
          ) : (
            <StockGrid onStockSelect={handleStockSelect} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

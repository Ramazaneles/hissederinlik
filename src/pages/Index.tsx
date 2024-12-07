import { useState } from "react";
import { StockSearch } from "@/components/StockSearch";
import { StockDepthTable } from "@/components/StockDepthTable";
import { StockGrid } from "@/components/StockGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUp, ArrowDown, TrendingUp, BarChart3, DollarSign, Clock } from "lucide-react";

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
  const [selectedStock, setSelectedStock] = useState<string | null>(null);

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
    lastUpdated: "14:23:45"
  });

  const stockDetails = selectedStock ? getStockDetails(selectedStock) : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6 bg-card rounded-lg p-4">
            {selectedStock ? (
              <button 
                className="text-muted hover:text-foreground transition-colors"
                onClick={() => setSelectedStock(null)}
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
            {selectedStock && (
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-md bg-success/20 text-success hover:bg-success/30 transition-colors">
                  AL
                </button>
                <button className="px-4 py-2 rounded-md bg-danger/20 text-danger hover:bg-danger/30 transition-colors">
                  SAT
                </button>
              </div>
            )}
          </div>

          {selectedStock && stockDetails ? (
            <div className="space-y-4">
              <div className="card">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedStock}</h2>
                    <p className="text-muted">{stockDetails.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{stockDetails.price.toFixed(2)} ₺</p>
                    <p className={`flex items-center justify-end ${stockDetails.change >= 0 ? 'text-success' : 'text-danger'}`}>
                      {stockDetails.change >= 0 ? (
                        <ArrowUp className="h-4 w-4 mr-1" />
                      ) : (
                        <ArrowDown className="h-4 w-4 mr-1" />
                      )}
                      {Math.abs(stockDetails.change)}%
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 bg-card/50 rounded-lg">
                    <div className="flex items-center gap-2 text-muted mb-1">
                      <BarChart3 className="h-4 w-4" />
                      <span className="text-sm">Hacim</span>
                    </div>
                    <p className="font-mono">{stockDetails.volume.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-card/50 rounded-lg">
                    <div className="flex items-center gap-2 text-muted mb-1">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-sm">Piyasa Değeri</span>
                    </div>
                    <p className="font-mono">{stockDetails.marketCap} ₺</p>
                  </div>
                  <div className="p-3 bg-card/50 rounded-lg">
                    <div className="flex items-center gap-2 text-muted mb-1">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm">Günlük Aralık</span>
                    </div>
                    <p className="font-mono">{stockDetails.dayRange}</p>
                  </div>
                  <div className="p-3 bg-card/50 rounded-lg">
                    <div className="flex items-center gap-2 text-muted mb-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Son Güncelleme</span>
                    </div>
                    <p className="font-mono">{stockDetails.lastUpdated}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-3 bg-card/50 rounded-lg">
                    <div className="flex items-center gap-2 text-muted mb-1">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm">52 Haftalık Aralık</span>
                    </div>
                    <p className="font-mono">{stockDetails.yearRange}</p>
                  </div>
                  <div className="p-3 bg-card/50 rounded-lg">
                    <div className="flex items-center gap-2 text-muted mb-1">
                      <BarChart3 className="h-4 w-4" />
                      <span className="text-sm">Ortalama Hacim (30G)</span>
                    </div>
                    <p className="font-mono">{stockDetails.avgVolume.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <StockDepthTable buyOrders={mockBuyOrders} sellOrders={mockSellOrders} />
            </div>
          ) : (
            <StockGrid onStockSelect={setSelectedStock} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
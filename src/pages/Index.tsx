import { useState } from "react";
import { StockSearch } from "@/components/StockSearch";
import { StockDepthTable } from "@/components/StockDepthTable";
import { StockGrid } from "@/components/StockGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
              <StockSearch />
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

          {selectedStock ? (
            <div className="space-y-4">
              <div className="card">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedStock}</h2>
                    <p className="text-muted">Vakıf REIT</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">19.54 ₺</p>
                    <p className="text-success flex items-center justify-end">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
                           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19V5M5 12l7-7 7 7"/>
                      </svg>
                      2.45%
                    </p>
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
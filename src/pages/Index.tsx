import { useState } from "react";
import { StockSearch } from "@/components/StockSearch";
import { StockDepthTable } from "@/components/StockDepthTable";
import { StockGrid } from "@/components/StockGrid";

// Mock data to match the image example
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
  const [showDepth, setShowDepth] = useState(false);

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6 bg-card rounded-lg p-4">
          {showDepth ? (
            <button 
              className="text-muted hover:text-foreground"
              onClick={() => setShowDepth(false)}
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
          {showDepth && (
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-md bg-success/20 text-success hover:bg-success/30">
                AL
              </button>
              <button className="px-4 py-2 rounded-md bg-danger/20 text-danger hover:bg-danger/30">
                SAT
              </button>
            </div>
          )}
        </div>

        {showDepth ? (
          <StockDepthTable buyOrders={mockBuyOrders} sellOrders={mockSellOrders} />
        ) : (
          <StockGrid />
        )}
      </div>
    </div>
  );
};

export default Index;

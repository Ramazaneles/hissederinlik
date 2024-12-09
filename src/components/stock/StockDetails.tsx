import { StockHeader } from "./StockHeader";
import { StockMetrics } from "./StockMetrics";
import { StockDepthTable } from "../StockDepthTable";

interface StockDetailsProps {
  symbol: string;
  details: {
    name: string;
    price: number;
    change: number;
    volume: number;
    marketCap: string;
    dayRange: string;
    yearRange: string;
    avgVolume: number;
    lastUpdated: string;
    pe: number;
    eps: number;
    dividend: string;
    beta: number;
  };
  buyOrders: any[];
  sellOrders: any[];
}

export const StockDetails = ({ symbol, details, buyOrders, sellOrders }: StockDetailsProps) => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">{symbol} Hisse Lot Sayısı ve Hisse Derinlik</h1>
      <div className="card">
        <StockHeader 
          symbol={symbol}
          name={details.name}
          price={details.price}
          change={details.change}
        />
        <StockMetrics details={details} />
      </div>
      <StockDepthTable buyOrders={buyOrders} sellOrders={sellOrders} />
    </div>
  );
};
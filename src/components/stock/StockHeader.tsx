import { ArrowUp, ArrowDown } from 'lucide-react';

interface StockHeaderProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

export const StockHeader = ({ symbol, name, price, change }: StockHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-3xl font-bold">{symbol}</h2>
        <p className="text-muted text-lg">{name}</p>
      </div>
      <div className="text-right">
        <p className="text-3xl font-bold">{price.toFixed(2)} ₺</p>
        <p className={`flex items-center justify-end text-lg ${change >= 0 ? 'text-success' : 'text-danger'}`}>
          {change >= 0 ? (
            <ArrowUp className="h-5 w-5 mr-1" />
          ) : (
            <ArrowDown className="h-5 w-5 mr-1" />
          )}
          {Math.abs(change)}%
        </p>
      </div>
    </div>
  );
};
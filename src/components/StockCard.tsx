import { ArrowUp, ArrowDown } from 'lucide-react';

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

export const StockCard = ({ symbol, name, price, change }: StockCardProps) => {
  const isPositive = change >= 0;

  return (
    <div className="card animate-fade-in hover:border hover:border-primary cursor-pointer transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold">{symbol}</h3>
          <p className="text-sm text-muted">{name}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">${price.toFixed(2)}</p>
          <p className={`flex items-center ${isPositive ? 'text-success' : 'text-danger'}`}>
            {isPositive ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
            {Math.abs(change).toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};
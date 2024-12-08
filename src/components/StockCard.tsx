import { ArrowUp, ArrowDown } from 'lucide-react';

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: number;
  marketCap: string;
  sector: string;
  onClick?: () => void;
}

export const StockCard = ({ 
  symbol, 
  name, 
  price, 
  change, 
  volume, 
  marketCap, 
  sector,
  onClick 
}: StockCardProps) => {
  const isPositive = change >= 0;

  return (
    <div 
      className="card animate-fade-in hover:border hover:border-primary cursor-pointer transition-all bg-card p-4 rounded-lg"
      onClick={onClick}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold">{symbol}</h3>
            <p className="text-sm text-muted">{name}</p>
            <p className="text-xs text-muted mt-1">{sector}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">{price.toFixed(2)} ₺</p>
            <p className={`flex items-center justify-end ${isPositive ? 'text-success' : 'text-danger'}`}>
              {isPositive ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
              {Math.abs(change).toFixed(2)}%
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-muted/20">
          <div>
            <p className="text-xs text-muted">Hacim</p>
            <p className="text-sm">{volume.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted">Piyasa Değeri</p>
            <p className="text-sm">{marketCap}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
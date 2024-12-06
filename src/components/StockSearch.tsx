import { Search } from 'lucide-react';

export const StockSearch = () => {
  return (
    <div className="relative">
      <div className="relative flex items-center">
        <Search className="absolute left-3 text-muted h-5 w-5" />
        <input
          type="text"
          className="w-full bg-background border-none rounded-full pl-10 pr-4 py-2 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="VRGYO"
          defaultValue="VRGYO"
        />
      </div>
    </div>
  );
};
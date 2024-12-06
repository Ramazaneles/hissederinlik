import { Search } from 'lucide-react';
import { useState } from 'react';

export const StockSearch = () => {
  const [searchTerm, setSearchTerm] = useState('VRGYO');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toUpperCase());
  };

  return (
    <div className="relative">
      <div className="relative flex items-center">
        <Search className="absolute left-3 text-muted h-5 w-5" />
        <input
          type="text"
          className="w-full bg-background border-none rounded-full pl-10 pr-4 py-2 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Hisse Ara..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
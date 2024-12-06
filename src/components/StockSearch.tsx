import { useState } from 'react';
import { Search } from 'lucide-react';

export const StockSearch = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          className="input w-full pl-10"
          placeholder="Search stocks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-muted h-5 w-5" />
      </div>
    </div>
  );
};
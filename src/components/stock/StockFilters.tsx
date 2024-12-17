import { Button } from "../ui/button";
import { ArrowUpDown, TrendingUp, TrendingDown, Volume2 } from 'lucide-react';

interface StockFiltersProps {
  sortField: "price" | "change" | "volume";
  sortDirection: "asc" | "desc";
  filter: string;
  onFilterChange: (value: string) => void;
  onSort: (field: "price" | "change" | "volume") => void;
}

export const StockFilters = ({
  sortField,
  sortDirection,
  filter,
  onFilterChange,
  onSort
}: StockFiltersProps) => {
  return (
    <div className="mb-4 space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Hisse, Sektör veya Şirket Ara..."
          className="flex-1 input"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onSort("price")}
          className={sortField === "price" ? "bg-primary/10" : ""}
        >
          <ArrowUpDown className="h-4 w-4 mr-1" />
          Fiyat
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onSort("change")}
          className={sortField === "change" ? "bg-primary/10" : ""}
        >
          {sortDirection === "asc" ? (
            <TrendingUp className="h-4 w-4 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 mr-1" />
          )}
          Değişim
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onSort("volume")}
          className={sortField === "volume" ? "bg-primary/10" : ""}
        >
          <Volume2 className="h-4 w-4 mr-1" />
          Hacim
        </Button>
      </div>
    </div>
  );
};
import { ArrowUp, ArrowDown } from 'lucide-react';

interface MarketIndicator {
  name: string;
  value: string | number;
  change: number;
  label: string;
}

const indicators: MarketIndicator[] = [
  { name: "BIST 100", value: "8,245.67", change: 1.24, label: "BIST 100" },
  { name: "USD/TRY", value: "31.24", change: -0.45, label: "USD/TRY" },
  { name: "Bitcoin", value: "$52,345", change: 2.15, label: "Bitcoin" },
];

export const MarketSummary = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Piyasa Özeti</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {indicators.map((indicator) => (
          <div key={indicator.name} className="bg-card p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted">{indicator.label}</span>
              <span className={`flex items-center ${indicator.change >= 0 ? 'text-success' : 'text-danger'}`}>
                {indicator.change >= 0 ? (
                  <ArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-1" />
                )}
                {Math.abs(indicator.change)}%
              </span>
            </div>
            <p className="text-xl font-bold">{indicator.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
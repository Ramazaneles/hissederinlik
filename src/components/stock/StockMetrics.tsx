import { BarChart3, DollarSign, TrendingUp, Clock, Activity, TrendingDown } from 'lucide-react';

interface StockMetricsProps {
  details: {
    volume: number;
    marketCap: string;
    dayRange: string;
    lastUpdated: string;
    yearRange: string;
    pe: number;
    eps: number;
    beta: number;
  };
}

export const StockMetrics = ({ details }: StockMetricsProps) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-card/50 rounded-lg">
          <div className="flex items-center gap-2 text-muted mb-2">
            <BarChart3 className="h-4 w-4" />
            <span>Hacim</span>
          </div>
          <p className="text-lg font-mono">{details.volume.toLocaleString()}</p>
        </div>
        <div className="p-4 bg-card/50 rounded-lg">
          <div className="flex items-center gap-2 text-muted mb-2">
            <DollarSign className="h-4 w-4" />
            <span>Piyasa Değeri</span>
          </div>
          <p className="text-lg font-mono">{details.marketCap} ₺</p>
        </div>
        <div className="p-4 bg-card/50 rounded-lg">
          <div className="flex items-center gap-2 text-muted mb-2">
            <TrendingUp className="h-4 w-4" />
            <span>Günlük Aralık</span>
          </div>
          <p className="text-lg font-mono">{details.dayRange}</p>
        </div>
        <div className="p-4 bg-card/50 rounded-lg">
          <div className="flex items-center gap-2 text-muted mb-2">
            <Clock className="h-4 w-4" />
            <span>Son Güncelleme</span>
          </div>
          <p className="text-lg font-mono">{details.lastUpdated}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-card/50 rounded-lg">
          <div className="flex items-center gap-2 text-muted mb-2">
            <TrendingUp className="h-4 w-4" />
            <span>52 Haftalık</span>
          </div>
          <p className="text-lg font-mono">{details.yearRange}</p>
        </div>
        <div className="p-4 bg-card/50 rounded-lg">
          <div className="flex items-center gap-2 text-muted mb-2">
            <Activity className="h-4 w-4" />
            <span>F/K</span>
          </div>
          <p className="text-lg font-mono">{details.pe}</p>
        </div>
        <div className="p-4 bg-card/50 rounded-lg">
          <div className="flex items-center gap-2 text-muted mb-2">
            <DollarSign className="h-4 w-4" />
            <span>Hisse Başı Kazanç</span>
          </div>
          <p className="text-lg font-mono">{details.eps}</p>
        </div>
        <div className="p-4 bg-card/50 rounded-lg">
          <div className="flex items-center gap-2 text-muted mb-2">
            <TrendingDown className="h-4 w-4" />
            <span>Beta</span>
          </div>
          <p className="text-lg font-mono">{details.beta}</p>
        </div>
      </div>
    </>
  );
};
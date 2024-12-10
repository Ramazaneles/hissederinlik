import { Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

interface MarketNewsProps {
  className?: string;
}

export const MarketNews = ({ className }: MarketNewsProps) => {
  const news = [
    {
      id: 1,
      title: "TCMB'den Faiz Kararı Açıklaması",
      time: "14:00",
      source: "Finans Haberleri",
    },
    {
      id: 2,
      title: "Otomotiv Sektöründe Yeni Yatırımlar",
      time: "13:45",
      source: "Ekonomi Bülteni",
    },
    {
      id: 3,
      title: "Bankacılık Sektörü 2024 Beklentileri",
      time: "13:30",
      source: "Borsa Analiz",
    },
  ];

  return (
    <div className={cn("card", className)}>
      <div className="flex items-center gap-2 mb-4">
        <Newspaper className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Piyasa Haberleri</h2>
      </div>
      <div className="space-y-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg bg-background hover:bg-card transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{item.title}</h3>
              <span className="text-sm text-muted">{item.time}</span>
            </div>
            <div className="text-sm text-muted mt-1">{item.source}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
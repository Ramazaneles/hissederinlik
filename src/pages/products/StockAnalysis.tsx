import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const StockAnalysis = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Hisse Senedi Analizi</h1>
        
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-muted-foreground">
            Profesyonel yatırımcılar için gelişmiş hisse senedi analiz araçları ve detaylı teknik veriler.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 bg-card border-muted/20">
            <h3 className="text-xl font-semibold mb-4">Temel Paket</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold">₺199</span>
              <span className="text-muted-foreground">/ay</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Temel Teknik Analiz</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>5 Hisse Takibi</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Günlük Raporlar</span>
              </li>
            </ul>
            <Button className="w-full">Şimdi Başla</Button>
          </Card>

          <Card className="p-6 bg-card border-primary/50">
            <h3 className="text-xl font-semibold mb-4">Pro Paket</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold">₺399</span>
              <span className="text-muted-foreground">/ay</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Gelişmiş Teknik Analiz</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Sınırsız Hisse Takibi</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Anlık Bildirimler</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Özel Raporlar</span>
              </li>
            </ul>
            <Button className="w-full">Pro'ya Geç</Button>
          </Card>

          <Card className="p-6 bg-card border-muted/20">
            <h3 className="text-xl font-semibold mb-4">Kurumsal</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold">Özel</span>
              <span className="text-muted-foreground"> Fiyat</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Tüm Pro Özellikleri</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>API Erişimi</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Özel Destek</span>
              </li>
            </ul>
            <Button className="w-full">İletişime Geç</Button>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StockAnalysis;
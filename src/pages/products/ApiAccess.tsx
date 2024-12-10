import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

const ApiAccess = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">API Erişimi</h1>
        
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-muted-foreground">
            Borsa Analiz API'si ile tüm borsa verilerine programatik erişim sağlayın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 bg-card border-muted/20">
            <h3 className="text-xl font-semibold mb-4">Hızlı Başlangıç</h3>
            <p className="text-muted-foreground mb-4">
              API anahtarınızı kullanarak hemen başlayın:
            </p>
            <div className="bg-background p-4 rounded-md mb-4">
              <code className="text-sm">
                curl -X GET https://api.borsaanaliz.com/v1/stocks \<br />
                -H "Authorization: Bearer YOUR_API_KEY"
              </code>
              <Button variant="ghost" size="icon" className="ml-2">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <Button className="w-full">API Anahtarı Al</Button>
          </Card>

          <Card className="p-6 bg-card border-muted/20">
            <h3 className="text-xl font-semibold mb-4">Özellikler</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Gerçek Zamanlı Veri</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>WebSocket Desteği</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Tarihsel Veri</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Teknik Göstergeler</span>
              </li>
            </ul>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mb-6">API Endpointleri</h2>
        <div className="space-y-4">
          <Card className="p-6 bg-card border-muted/20">
            <h3 className="text-xl font-semibold mb-2">GET /stocks</h3>
            <p className="text-muted-foreground">Tüm hisse senetleri listesi</p>
          </Card>
          <Card className="p-6 bg-card border-muted/20">
            <h3 className="text-xl font-semibold mb-2">GET /stocks/:symbol</h3>
            <p className="text-muted-foreground">Belirli bir hisse senedi detayları</p>
          </Card>
          <Card className="p-6 bg-card border-muted/20">
            <h3 className="text-xl font-semibold mb-2">GET /market/summary</h3>
            <p className="text-muted-foreground">Piyasa özeti</p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApiAccess;
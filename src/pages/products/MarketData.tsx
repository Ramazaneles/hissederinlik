import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ocak', value: 4000 },
  { name: 'Şubat', value: 3000 },
  { name: 'Mart', value: 2000 },
  { name: 'Nisan', value: 2780 },
  { name: 'Mayıs', value: 1890 },
  { name: 'Haziran', value: 2390 },
];

const MarketData = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Piyasa Verileri</h1>
        
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-muted-foreground">
            BIST 100 ve diğer önemli endeksler için gerçek zamanlı piyasa verileri ve analizler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 bg-card border-muted/20">
            <h3 className="text-xl font-semibold mb-4">BIST 100 Performans</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#0EA5E9" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6 bg-card border-muted/20">
            <h3 className="text-xl font-semibold mb-4">Sektör Performansları</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Bankacılık</span>
                <span className="text-success">+2.45%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sanayi</span>
                <span className="text-danger">-1.23%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Teknoloji</span>
                <span className="text-success">+3.67%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Ulaştırma</span>
                <span className="text-success">+0.89%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Enerji</span>
                <span className="text-danger">-0.45%</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-muted/20">
            <h3 className="text-xl font-semibold mb-3">Döviz Kurları</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>USD/TRY</span>
                <span>31.23</span>
              </div>
              <div className="flex justify-between">
                <span>EUR/TRY</span>
                <span>33.45</span>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card border-muted/20">
            <h3 className="text-xl font-semibold mb-3">Emtia</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Altın (gr)</span>
                <span>1,850</span>
              </div>
              <div className="flex justify-between">
                <span>Gümüş (gr)</span>
                <span>23.5</span>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card border-muted/20">
            <h3 className="text-xl font-semibold mb-3">Kripto</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>BTC/USD</span>
                <span>65,432</span>
              </div>
              <div className="flex justify-between">
                <span>ETH/USD</span>
                <span>3,456</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MarketData;
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const JobListing = ({ title, department, location, type }: {
  title: string;
  department: string;
  location: string;
  type: string;
}) => (
  <Card className="p-6 bg-card border-muted/20 hover:border-primary/50 transition-colors">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-1">
          <p className="text-muted-foreground">{department}</p>
          <p className="text-muted-foreground">{location}</p>
          <p className="text-muted-foreground">{type}</p>
        </div>
      </div>
      <Button>Başvur</Button>
    </div>
  </Card>
);

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Mühendislik",
      location: "İstanbul",
      type: "Tam Zamanlı"
    },
    {
      title: "Finans Analisti",
      department: "Finans",
      location: "İstanbul",
      type: "Tam Zamanlı"
    },
    {
      title: "UX/UI Tasarımcı",
      department: "Tasarım",
      location: "Uzaktan",
      type: "Tam Zamanlı"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Kariyer Fırsatları</h1>
        
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-muted-foreground">
            Borsa Analiz'de çalışarak, Türkiye'nin en yenilikçi finans teknolojileri şirketlerinden birinde kariyerinizi geliştirebilirsiniz.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Açık Pozisyonlar</h2>
        <div className="space-y-4">
          {openPositions.map((position, index) => (
            <JobListing key={index} {...position} />
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Neden Borsa Analiz?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-muted/20">
              <h3 className="text-xl font-semibold mb-3">Sürekli Gelişim</h3>
              <p className="text-muted-foreground">
                Profesyonel gelişiminiz için eğitim ve mentorluk imkanları
              </p>
            </Card>
            <Card className="p-6 bg-card border-muted/20">
              <h3 className="text-xl font-semibold mb-3">Esnek Çalışma</h3>
              <p className="text-muted-foreground">
                Hibrit çalışma modeli ve esnek çalışma saatleri
              </p>
            </Card>
            <Card className="p-6 bg-card border-muted/20">
              <h3 className="text-xl font-semibold mb-3">Rekabetçi Haklar</h3>
              <p className="text-muted-foreground">
                Piyasa üstü maaş ve yan haklar paketi
              </p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
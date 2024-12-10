import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Hakkımızda</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Borsa Analiz, yatırımcılara Borsa İstanbul (BIST) hisse senetleri için kapsamlı analiz ve derinlik verisi sunan profesyonel bir platformdur.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Misyonumuz</h2>
          <p className="text-muted-foreground mb-6">
            Yatırımcılara en güncel ve doğru borsa verilerini sunarak, bilinçli yatırım kararları almalarına yardımcı olmak.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Vizyonumuz</h2>
          <p className="text-muted-foreground mb-6">
            Türkiye'nin en güvenilir ve kapsamlı borsa analiz platformu olmak ve yatırımcıların ilk tercihi haline gelmek.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Değerlerimiz</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>Güvenilirlik ve Şeffaflık</li>
            <li>Yenilikçilik</li>
            <li>Kullanıcı Odaklılık</li>
            <li>Sürekli Gelişim</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
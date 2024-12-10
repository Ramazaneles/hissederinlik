import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Kullanım Koşulları</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Son güncelleme: 15 Mart 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Hizmet Kullanımı</h2>
            <p className="text-muted-foreground mb-4">
              Borsa Analiz platformunu kullanarak, bu kullanım koşullarını kabul etmiş olursunuz. 
              Platformumuz, yatırım kararlarınız için yardımcı bir araç olarak tasarlanmıştır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Sorumluluk Reddi</h2>
            <p className="text-muted-foreground mb-4">
              Borsa Analiz, sunduğu bilgilerin doğruluğunu sağlamak için azami özeni göstermekle birlikte, 
              bu bilgilerin kullanımından doğabilecek zararlardan sorumlu tutulamaz. Yatırım kararları 
              tamamen kullanıcının sorumluluğundadır.
            
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Hesap Güvenliği</h2>
            <p className="text-muted-foreground mb-4">
              Hesabınızın güvenliğinden siz sorumlusunuz. Şifrenizi güvende tutmalı ve hesabınızla 
              yapılan tüm işlemlerin sorumluluğunu üstlenmelisiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Fikri Mülkiyet</h2>
            <p className="text-muted-foreground mb-4">
              Platform üzerindeki tüm içerik, tasarım ve yazılım Borsa Analiz'in fikri mülkiyetidir. 
              İzinsiz kullanımı ve kopyalanması yasaktır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Değişiklikler</h2>
            <p className="text-muted-foreground mb-4">
              Bu kullanım koşulları zaman zaman güncellenebilir. Değişiklikler, web sitemizde 
              yayınlandığı tarihte yürürlüğe girer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. İletişim</h2>
            <p className="text-muted-foreground">
              Kullanım koşulları hakkında sorularınız için legal@borsaanaliz.com adresinden 
              bizimle iletişime geçebilirsiniz.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Çerez Politikası</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Son güncelleme: 15 Mart 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Çerez Nedir?</h2>
            <p className="text-muted-foreground mb-4">
              Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınıza yerleştirilen küçük metin 
              dosyalarıdır. Bu dosyalar, size daha iyi bir kullanıcı deneyimi sunmamıza yardımcı olur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Kullandığımız Çerez Türleri</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold mb-2">Zorunlu Çerezler</h3>
                <p>Web sitemizin temel işlevleri için gerekli olan çerezler.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Performans Çerezleri</h3>
                <p>Sitemizin performansını ve kullanımını analiz etmek için kullanılan çerezler.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">İşlevsellik Çerezleri</h3>
                <p>Tercihlerinizi hatırlamak ve size özelleştirilmiş bir deneyim sunmak için kullanılan çerezler.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Çerez Yönetimi</h2>
            <p className="text-muted-foreground mb-4">
              Tarayıcı ayarlarınızdan çerezleri kontrol edebilir veya silebilirsiniz. Ancak, 
              çerezleri devre dışı bırakmanız durumunda web sitemizin bazı özellikleri düzgün 
              çalışmayabilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Çerez Tercihleri</h2>
            <p className="text-muted-foreground mb-4">
              Web sitemizi ilk ziyaretinizde çerez tercihlerinizi belirleyebilirsiniz. Bu tercihleri 
              istediğiniz zaman değiştirebilirsiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. İletişim</h2>
            <p className="text-muted-foreground">
              Çerez politikamız hakkında sorularınız için privacy@borsaanaliz.com adresinden 
              bizimle iletişime geçebilirsiniz.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
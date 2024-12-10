import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Gizlilik Politikası</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Son güncelleme: 15 Mart 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Veri Toplama</h2>
            <p className="text-muted-foreground mb-4">
              Borsa Analiz olarak, hizmetlerimizi kullanırken sizden toplanan bilgilerin gizliliğini korumaya önem veriyoruz. 
              Bu politika, hangi verileri topladığımızı ve bunları nasıl kullandığımızı açıklar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Bilgi Kullanımı</h2>
            <p className="text-muted-foreground mb-4">
              Topladığımız bilgiler aşağıdaki amaçlarla kullanılır:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4">
              <li>Hizmetlerimizi sağlamak ve geliştirmek</li>
              <li>Güvenliği sağlamak</li>
              <li>İletişim kurmak</li>
              <li>Yasal yükümlülükleri yerine getirmek</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Veri Güvenliği</h2>
            <p className="text-muted-foreground mb-4">
              Verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanıyoruz. 
              Bu önlemler arasında şifreleme, güvenli sunucu kullanımı ve düzenli güvenlik değerlendirmeleri yer alır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Çerezler</h2>
            <p className="text-muted-foreground mb-4">
              Sitemizde çerezler kullanıyoruz. Çerezler, size daha iyi bir deneyim sunmamıza ve 
              hizmetlerimizi geliştirmemize yardımcı olur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. İletişim</h2>
            <p className="text-muted-foreground">
              Gizlilik politikamız hakkında sorularınız için privacy@borsaanaliz.com adresinden 
              bizimle iletişime geçebilirsiniz.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
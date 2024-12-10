import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const post = {
    title: "BIST 100 Teknik Analiz: 2024 Yılı Beklentileri",
    date: "15 Mart 2024",
    content: `
      <p>2024 yılında BIST 100 endeksinin teknik analiz perspektifinden değerlendirmesi oldukça önemli görünüyor. Piyasaların genel görünümü ve teknik göstergeler, yatırımcılar için kritik sinyaller veriyor.</p>

      <h2>Teknik Göstergeler</h2>
      <p>BIST 100 endeksinin günlük grafiklerde gösterdiği performans, özellikle 200 günlük hareketli ortalamanın üzerinde seyretmesi, uzun vadeli yükseliş trendinin devam ettiğine işaret ediyor.</p>

      <h2>Destek ve Direnç Seviyeleri</h2>
      <p>Endeksin önemli destek seviyeleri 8.500 ve 8.200 puanda bulunuyor. Yukarıda ise 9.000 ve 9.200 puan seviyeleri önemli direnç noktaları olarak öne çıkıyor.</p>

      <h2>Hacim Analizi</h2>
      <p>İşlem hacimlerindeki artış, piyasadaki likiditenin güçlü olduğunu gösteriyor. Bu durum, trend değişimlerinin daha sağlıklı olabileceğine işaret ediyor.</p>

      <h2>Sonuç</h2>
      <p>Teknik analiz göstergeleri, BIST 100 endeksinin 2024 yılında temkinli iyimserlik sürecine işaret ediyor. Yatırımcıların risk yönetimi stratejilerini gözden geçirmeleri ve pozisyon alırken teknik seviyeleri takip etmeleri öneriliyor.</p>
    `
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | StockDepth Blog</title>
        <meta name="description" content={post.title} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
          <div className="text-muted mb-8">{post.date}</div>
          <div 
            className="text-foreground space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
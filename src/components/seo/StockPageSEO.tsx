import { Helmet } from "react-helmet";

interface StockPageSEOProps {
  symbol: string;
  details?: {
    price: number;
    change: number;
    name: string;
  };
}

export const StockPageSEO = ({ symbol, details }: StockPageSEOProps) => {
  if (!details) {
    return (
      <Helmet>
        <title>Borsa İstanbul (BIST) Hisse Senetleri | Canlı Borsa Takibi ve Analiz</title>
        <meta 
          name="description" 
          content="Borsa İstanbul (BIST) hisse senetleri canlı takip, anlık fiyatlar, değişim oranları ve hacim bilgileri. En güncel borsa verileri ve teknik analizler." 
        />
        <meta 
          name="keywords" 
          content="borsa istanbul, bist, bist 100, hisse senetleri, borsa, canlı borsa, borsa analiz, hisse analiz, thyao, garan, bist analiz" 
        />
      </Helmet>
    );
  }

  const currentDate = new Date().toLocaleDateString('tr-TR');
  const changeText = details.change >= 0 ? "değer kazancı" : "değer kaybı";

  return (
    <Helmet>
      <title>{symbol} Hisse Lot Sayısı ve Hisse Derinlik Kademeleri</title>
      <meta
        name="description"
        content={`${symbol} hissesi ${currentDate} tarihinde günü ${details.price.toFixed(2)} TL'den ve %${Math.abs(details.change).toFixed(2)} ${changeText} ile tamamladı. İşte ${symbol} hisse lot sayısı ve derinlik kademeleri`}
      />
      <meta
        name="keywords"
        content={`${symbol}, ${symbol} hisse, ${symbol} lot, ${symbol} kademe, borsa istanbul, ${symbol} analiz, ${symbol} derinlik, ${symbol} alış satış, bist hisse, ${details.name}`}
      />
    </Helmet>
  );
};
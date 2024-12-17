// BIST (Borsa Istanbul) stock symbols
export const stockSymbols = [
  // BIST 30
  "THYAO.IS", "GARAN.IS", "ASELS.IS", "KCHOL.IS", "EREGL.IS", 
  "BIMAS.IS", "AKBNK.IS", "SISE.IS", "TUPRS.IS", "SAHOL.IS",
  "SASA.IS", "YKBNK.IS", "PGSUS.IS", "TAVHL.IS", "TOASO.IS",
  "ARCLK.IS", "EKGYO.IS", "FROTO.IS", "HEKTS.IS", "ISCTR.IS",
  "KRDMD.IS", "KOZAL.IS", "KOZAA.IS", "ODAS.IS", "PETKM.IS",
  "TCELL.IS", "TKFEN.IS", "TSKB.IS", "TTKOM.IS", "VESTL.IS",
  
  // BIST 50
  "AEFES.IS", "ALARK.IS", "ALBRK.IS", "ANACM.IS", "AYGAZ.IS",
  "CCOLA.IS", "DOHOL.IS", "ENKAI.IS", "ENJSA.IS", "GESAN.IS",
  "GUBRF.IS", "HALKB.IS", "IHLGM.IS", "IPEKE.IS", "ISDMR.IS",
  "KARSN.IS", "KONTR.IS", "MGROS.IS", "OYAKC.IS", "PRKME.IS",
  
  // BIST 100
  "AKSEN.IS", "ALCTL.IS", "ALGYO.IS", "ANHYT.IS", "ANSGR.IS",
  "ARENA.IS", "ARMDA.IS", "ARSAN.IS", "ATAGY.IS", "AVOD.IS",
  "AYDEM.IS", "BAGFS.IS", "BAKAB.IS", "BANVT.IS", "BERA.IS",
  "BRISA.IS", "BRYAT.IS", "BUCIM.IS", "CANTE.IS", "CEMTS.IS",
  "CIMSA.IS", "CLEBI.IS", "DEVA.IS", "DOAS.IS", "ECILC.IS",
  "EGEEN.IS", "EREGL.IS", "EUPWR.IS", "FENER.IS", "GENTS.IS",
  "GLYHO.IS", "GSDHO.IS", "GSRAY.IS", "HDFGS.IS", "INDES.IS",
  "ISMEN.IS", "IZMDC.IS", "JANTS.IS", "KARSN.IS", "KARTN.IS",
  "KCHOL.IS", "KERVT.IS", "KLMSN.IS", "KMPUR.IS", "KONYA.IS",
  "KORDS.IS", "KZBGY.IS", "LOGO.IS", "MAVI.IS", "METRO.IS",

  // Additional BIST Stocks
  "NETAS.IS", "NTHOL.IS", "OTKAR.IS", "PARSN.IS", "PGSUS.IS",
  "PNSUT.IS", "POLHO.IS", "PRKAB.IS", "QUAGR.IS", "RAYSG.IS",
  "RTALB.IS", "SARKY.IS", "SASA.IS", "SELEC.IS", "SISE.IS",
  "SKBNK.IS", "SNGYO.IS", "SOKM.IS", "TATGD.IS", "TAVHL.IS",
  "TCELL.IS", "TDGYO.IS", "TEKTU.IS", "THYAO.IS", "TKFEN.IS",
  "TKNSA.IS", "TLMAN.IS", "TMSN.IS", "TOASO.IS", "TRCAS.IS",
  "TRGYO.IS", "TSKB.IS", "TTKOM.IS", "TTRAK.IS", "TUKAS.IS",
  "TUPRS.IS", "TURSG.IS", "ULKER.IS", "VAKBN.IS", "VERUS.IS",
  "VESBE.IS", "VESTL.IS", "VKGYO.IS", "YATAS.IS", "YKBNK.IS",
  "YYLGD.IS", "ZOREN.IS", "ZRGYO.IS"
];

// Mock data structure for fallback
export const mockStockData: Record<string, {
  name: string;
  price: number;
  change: number;
  volume: number;
  marketCap: string;
  sector: string;
}> = {
  "THYAO.IS": { name: "Türk Hava Yolları", price: 245.80, change: 1.2, volume: 1234567, marketCap: "85.4B", sector: "Ulaştırma" },
  "GARAN.IS": { name: "Garanti Bankası", price: 54.25, change: -0.8, volume: 987654, marketCap: "45.2B", sector: "Bankacılık" },
  "ASELS.IS": { name: "Aselsan", price: 33.42, change: 0.5, volume: 456789, marketCap: "30.1B", sector: "Savunma" },
  "KCHOL.IS": { name: "Koç Holding", price: 122.90, change: 2.1, volume: 345678, marketCap: "75.3B", sector: "Holding" },
  "EREGL.IS": { name: "Ereğli Demir Çelik", price: 42.68, change: -1.2, volume: 234567, marketCap: "38.6B", sector: "Demir-Çelik" },
  "BIMAS.IS": { name: "BİM Mağazalar", price: 151.30, change: 0.3, volume: 123456, marketCap: "42.8B", sector: "Perakende" },
  "AKBNK.IS": { name: "Akbank", price: 44.86, change: -0.4, volume: 876543, marketCap: "35.7B", sector: "Bankacılık" },
  "SISE.IS": { name: "Şişe Cam", price: 35.24, change: 1.5, volume: 765432, marketCap: "25.4B", sector: "Cam" },
  "TUPRS.IS": { name: "Tüpraş", price: 178.50, change: 2.8, volume: 654321, marketCap: "55.9B", sector: "Enerji" },
  "SAHOL.IS": { name: "Sabancı Holding", price: 68.15, change: -0.6, volume: 543210, marketCap: "48.2B", sector: "Holding" },
  "SASA.IS": { name: "SASA Polyester", price: 58.90, change: 1.7, volume: 432109, marketCap: "28.3B", sector: "Kimya" },
  "YKBNK.IS": { name: "Yapı Kredi", price: 38.46, change: 0.9, volume: 321098, marketCap: "32.5B", sector: "Bankacılık" },
  "PGSUS.IS": { name: "Pegasus", price: 188.70, change: -1.8, volume: 210987, marketCap: "22.1B", sector: "Ulaştırma" },
  "TAVHL.IS": { name: "TAV Havalimanları", price: 91.35, change: 1.1, volume: 109876, marketCap: "18.7B", sector: "Ulaştırma" },
  "TOASO.IS": { name: "Tofaş Oto", price: 144.20, change: 0.7, volume: 98765, marketCap: "29.6B", sector: "Otomotiv" },
  "ARCLK.IS": { name: "Arçelik", price: 82.45, change: 1.3, volume: 234567, marketCap: "31.2B", sector: "Dayanıklı Tüketim" },
  "EKGYO.IS": { name: "Emlak Konut GYO", price: 12.34, change: -0.5, volume: 876543, marketCap: "15.8B", sector: "GYO" },
  "FROTO.IS": { name: "Ford Otosan", price: 567.80, change: 2.4, volume: 98765, marketCap: "82.3B", sector: "Otomotiv" },
  "TCELL.IS": { name: "Turkcell", price: 45.67, change: 0.8, volume: 345678, marketCap: "41.5B", sector: "İletişim" },
  "PETKM.IS": { name: "Petkim", price: 28.90, change: -1.1, volume: 456789, marketCap: "22.7B", sector: "Petrokimya" }
};
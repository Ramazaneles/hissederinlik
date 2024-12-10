import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

// About pages
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/about/Contact";
import Careers from "./pages/about/Careers";

// Product pages
import StockAnalysis from "./pages/products/StockAnalysis";
import MarketData from "./pages/products/MarketData";
import ApiAccess from "./pages/products/ApiAccess";

// Legal pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:stock" element={<Index />} />
          
          {/* About routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Product routes */}
          <Route path="/products/stock-analysis" element={<StockAnalysis />} />
          <Route path="/products/market-data" element={<MarketData />} />
          <Route path="/products/api-access" element={<ApiAccess />} />
          
          {/* Legal routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
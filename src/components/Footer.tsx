import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-muted/20 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-muted hover:text-foreground transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/stock-analysis" className="text-muted hover:text-foreground transition-colors">Stock Analysis</Link></li>
              <li><Link to="/products/market-data" className="text-muted hover:text-foreground transition-colors">Market Data</Link></li>
              <li><Link to="/products/api-access" className="text-muted hover:text-foreground transition-colors">API Access</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/documentation" className="text-muted hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link to="/blog" className="text-muted hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/help" className="text-muted hover:text-foreground transition-colors">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-muted hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-muted hover:text-foreground transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-muted/20 mt-8 pt-8 text-center text-muted">
          <p>&copy; 2024 StockDepth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
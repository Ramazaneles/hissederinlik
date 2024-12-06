const Footer = () => {
  return (
    <footer className="bg-card border-t border-muted/20 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted hover:text-foreground">About Us</a></li>
              <li><a href="#" className="text-muted hover:text-foreground">Contact</a></li>
              <li><a href="#" className="text-muted hover:text-foreground">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted hover:text-foreground">Stock Analysis</a></li>
              <li><a href="#" className="text-muted hover:text-foreground">Market Data</a></li>
              <li><a href="#" className="text-muted hover:text-foreground">API Access</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="text-muted hover:text-foreground">Blog</a></li>
              <li><a href="#" className="text-muted hover:text-foreground">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="text-muted hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="text-muted hover:text-foreground">Cookie Policy</a></li>
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
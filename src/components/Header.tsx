import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Bell, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-card border-b border-muted/20 py-4 px-6 mb-6 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent hover:opacity-90 transition-opacity">
            StockDepth
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Piyasalar</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[240px] space-y-2">
                    <a href="#" className="flex items-center p-2 hover:bg-muted/20 rounded-md group">
                      <span className="w-2 h-2 rounded-full bg-success mr-2"></span>
                      BIST 100
                      <span className="ml-auto text-sm text-success group-hover:translate-x-1 transition-transform">
                        +1.24%
                      </span>
                    </a>
                    <a href="#" className="flex items-center p-2 hover:bg-muted/20 rounded-md group">
                      <span className="w-2 h-2 rounded-full bg-danger mr-2"></span>
                      Kripto
                      <span className="ml-auto text-sm text-danger group-hover:translate-x-1 transition-transform">
                        -2.15%
                      </span>
                    </a>
                    <a href="#" className="flex items-center p-2 hover:bg-muted/20 rounded-md group">
                      <span className="w-2 h-2 rounded-full bg-success mr-2"></span>
                      Döviz
                      <span className="ml-auto text-sm text-success group-hover:translate-x-1 transition-transform">
                        +0.45%
                      </span>
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Analiz</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[240px] space-y-2">
                    <a href="#" className="flex items-center p-2 hover:bg-muted/20 rounded-md">
                      <span className="text-primary">📊</span>
                      <span className="ml-2">Teknik Analiz</span>
                    </a>
                    <a href="#" className="flex items-center p-2 hover:bg-muted/20 rounded-md">
                      <span className="text-primary">📈</span>
                      <span className="ml-2">Temel Analiz</span>
                    </a>
                    <a href="#" className="flex items-center p-2 hover:bg-muted/20 rounded-md">
                      <span className="text-primary">🎯</span>
                      <span className="ml-2">Portföy Analizi</span>
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Haberler</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[300px] space-y-2">
                    <div className="space-y-3">
                      <a href="#" className="block p-2 hover:bg-muted/20 rounded-md">
                        <p className="text-sm font-medium">BIST 100 Yeni Rekor Kırdı</p>
                        <p className="text-xs text-muted">2 saat önce</p>
                      </a>
                      <a href="#" className="block p-2 hover:bg-muted/20 rounded-md">
                        <p className="text-sm font-medium">Merkez Bankası Faiz Kararı</p>
                        <p className="text-xs text-muted">4 saat önce</p>
                      </a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-muted/20 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <button className="px-4 py-2 rounded-md hover:bg-muted/20 flex items-center gap-2">
            <User className="h-5 w-5" />
            Giriş Yap
          </button>
          <button className="px-4 py-2 bg-primary rounded-md hover:opacity-90 transition-opacity">
            Üye Ol
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
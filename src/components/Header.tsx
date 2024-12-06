import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="bg-card border-b border-muted/20 py-4 px-6 mb-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold text-primary">StockDepth</h1>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Markets</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[200px] space-y-2">
                    <a href="#" className="block p-2 hover:bg-muted/20 rounded-md">BIST 100</a>
                    <a href="#" className="block p-2 hover:bg-muted/20 rounded-md">Crypto</a>
                    <a href="#" className="block p-2 hover:bg-muted/20 rounded-md">Forex</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Analysis</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[200px] space-y-2">
                    <a href="#" className="block p-2 hover:bg-muted/20 rounded-md">Technical</a>
                    <a href="#" className="block p-2 hover:bg-muted/20 rounded-md">Fundamental</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-md hover:bg-muted/20">Login</button>
          <button className="px-4 py-2 bg-primary rounded-md hover:opacity-90">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
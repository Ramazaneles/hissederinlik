import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUp, ArrowDown } from 'lucide-react';

interface DepthData {
  orderCount: number;
  lot: number;
  price: number;
}

interface DetailedOrder {
  price: number;
  lot: number;
  buyer: string;
  seller: string;
}

interface StockDepthTableProps {
  buyOrders: DepthData[];
  sellOrders: DepthData[];
}

// Mock detailed orders data (in real app, this would come from props)
const mockDetailedOrders: DetailedOrder[] = [
  { price: 8.98, lot: 55, buyer: "Vakif", seller: "Isik" },
  { price: 8.98, lot: 53415, buyer: "Vakif", seller: "Oyak" },
  { price: 8.98, lot: 7646, buyer: "Vakif", seller: "Gedik" },
  { price: 8.98, lot: 75, buyer: "Info", seller: "Gedik" },
  { price: 8.98, lot: 2279, buyer: "Deniz", seller: "Gedik" },
  { price: 8.98, lot: 5000, buyer: "Deniz", seller: "Meksa" },
  { price: 8.98, lot: 1, buyer: "Deniz", seller: "Oyak" },
  { price: 8.98, lot: 1, buyer: "Deniz", seller: "Ak Yatirim" },
  { price: 8.98, lot: 25, buyer: "Deniz", seller: "Oyak" },
  { price: 8.98, lot: 20, buyer: "Deniz", seller: "Gedik" },
];

export const StockDepthTable = ({ buyOrders, sellOrders }: StockDepthTableProps) => {
  // Calculate totals and statistics
  const totalBuyLot = buyOrders.reduce((sum, order) => sum + order.lot, 0);
  const totalSellLot = sellOrders.reduce((sum, order) => sum + order.lot, 0);
  const averageBuyPrice = buyOrders.reduce((sum, order) => sum + order.price * order.lot, 0) / totalBuyLot;
  const averageSellPrice = sellOrders.reduce((sum, order) => sum + order.price * order.lot, 0) / totalSellLot;
  const spreadAmount = sellOrders[0].price - buyOrders[0].price;
  const spreadPercentage = (spreadAmount / buyOrders[0].price) * 100;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Market Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <h3 className="text-sm text-muted mb-1">Spread</h3>
          <p className="text-lg font-bold">{spreadAmount.toFixed(2)} ₺ ({spreadPercentage.toFixed(2)}%)</p>
        </div>
        <div className="card">
          <h3 className="text-sm text-muted mb-1">Ortalama Alış</h3>
          <p className="text-lg font-bold text-success">{averageBuyPrice.toFixed(2)} ₺</p>
        </div>
        <div className="card">
          <h3 className="text-sm text-muted mb-1">Ortalama Satış</h3>
          <p className="text-lg font-bold text-danger">{averageSellPrice.toFixed(2)} ₺</p>
        </div>
      </div>

      {/* Depth Table */}
      <div className="bg-card rounded-lg p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted">A. E</TableHead>
              <TableHead className="text-muted">A. Lot</TableHead>
              <TableHead className="text-muted">Alış</TableHead>
              <TableHead className="text-muted">Satış</TableHead>
              <TableHead className="text-muted">S. Lot</TableHead>
              <TableHead className="text-muted">S. E</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {buyOrders.map((buy, index) => {
              const sell = sellOrders[index];
              const buyTotal = buyOrders.slice(0, index + 1).reduce((sum, order) => sum + order.lot, 0);
              const sellTotal = sellOrders.slice(0, index + 1).reduce((sum, order) => sum + order.lot, 0);
              
              return (
                <TableRow key={index} className="relative">
                  {/* Buy side progress bar */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 bg-success/10"
                    style={{ width: `${(buyTotal / totalBuyLot) * 50}%` }}
                  />
                  {/* Sell side progress bar */}
                  <div 
                    className="absolute right-0 top-0 bottom-0 bg-danger/10"
                    style={{ width: `${(sellTotal / totalSellLot) * 50}%` }}
                  />
                  
                  <TableCell className="text-success font-mono relative">
                    <div className="flex items-center gap-1">
                      <ArrowUp className="h-3 w-3" />
                      {buy.orderCount}
                    </div>
                  </TableCell>
                  <TableCell className="text-success font-mono relative">{buy.lot.toLocaleString()}</TableCell>
                  <TableCell className="text-success font-mono relative">{buy.price.toFixed(2)}</TableCell>
                  <TableCell className="text-danger font-mono relative">{sell.price.toFixed(2)}</TableCell>
                  <TableCell className="text-danger font-mono relative">{sell.lot.toLocaleString()}</TableCell>
                  <TableCell className="text-danger font-mono relative">
                    <div className="flex items-center gap-1">
                      <ArrowDown className="h-3 w-3" />
                      {sell.orderCount}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow className="bg-card/50">
              <TableCell colSpan={2} className="text-muted font-mono">
                Toplam: {totalBuyLot.toLocaleString()}
              </TableCell>
              <TableCell className="text-muted font-mono">
                Ort: {averageBuyPrice.toFixed(2)}
              </TableCell>
              <TableCell className="text-muted font-mono">
                Ort: {averageSellPrice.toFixed(2)}
              </TableCell>
              <TableCell colSpan={2} className="text-muted font-mono text-right">
                Toplam: {totalSellLot.toLocaleString()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Detailed Orders Table */}
      <div className="bg-card rounded-lg p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted">Fiyat</TableHead>
              <TableHead className="text-muted">Lot</TableHead>
              <TableHead className="text-muted">Alan</TableHead>
              <TableHead className="text-muted">Satan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDetailedOrders.map((order, index) => (
              <TableRow key={index}>
                <TableCell className="font-mono">{order.price.toFixed(2)}</TableCell>
                <TableCell className="font-mono">{order.lot.toLocaleString()}</TableCell>
                <TableCell>{order.buyer}</TableCell>
                <TableCell>{order.seller}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
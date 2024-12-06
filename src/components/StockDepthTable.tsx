import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface DepthData {
  orderCount: number;
  lot: number;
  price: number;
}

interface StockDepthTableProps {
  buyOrders: DepthData[];
  sellOrders: DepthData[];
}

export const StockDepthTable = ({ buyOrders, sellOrders }: StockDepthTableProps) => {
  // Calculate totals
  const totalBuyLot = buyOrders.reduce((sum, order) => sum + order.lot, 0);
  const totalSellLot = sellOrders.reduce((sum, order) => sum + order.lot, 0);
  const averageBuyPrice = buyOrders.reduce((sum, order) => sum + order.price, 0) / buyOrders.length;
  const averageSellPrice = sellOrders.reduce((sum, order) => sum + order.price, 0) / sellOrders.length;

  return (
    <div className="bg-background rounded-lg p-4 animate-fade-in">
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
            return (
              <TableRow key={index}>
                <TableCell className="text-success font-mono">{buy.orderCount}</TableCell>
                <TableCell className="text-success font-mono">{buy.lot.toLocaleString()}</TableCell>
                <TableCell className="text-success font-mono">{buy.price.toFixed(2)}</TableCell>
                <TableCell className="text-danger font-mono">{sell.price.toFixed(2)}</TableCell>
                <TableCell className="text-danger font-mono">{sell.lot.toLocaleString()}</TableCell>
                <TableCell className="text-danger font-mono">{sell.orderCount}</TableCell>
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
  );
};
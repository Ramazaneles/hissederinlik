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
  return (
    <div className="bg-background rounded-lg p-4">
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
                <TableCell className="text-success">{buy.orderCount}</TableCell>
                <TableCell className="text-success">{buy.lot.toLocaleString()}</TableCell>
                <TableCell className="text-success">{buy.price.toFixed(2)}</TableCell>
                <TableCell className="text-danger">{sell.price.toFixed(2)}</TableCell>
                <TableCell className="text-danger">{sell.lot.toLocaleString()}</TableCell>
                <TableCell className="text-danger">{sell.orderCount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
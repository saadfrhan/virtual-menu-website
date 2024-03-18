import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { menu } from "@/lib/data";

export default function MenuTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {menu.map((menu, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium flex flex-col w-fit gap-y-2">
              <p className="scroll-m-20 text-xl font-semibold tracking-tight">
                {menu.item}
              </p>
            </TableCell>
            <TableCell className="text-right">{menu.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

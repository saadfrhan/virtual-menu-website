import { DataTable } from "./data-table";
import { menu } from "@/lib/data";
import { columns } from "./columns";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Menu
      </h1>
      <DataTable
        columns={columns}
        data={menu.sort((a, b) =>
          a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? 1 : -1
        )}
      />
    </div>
  );
}

"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

export type Item = {
  id: number;
  item: string;
  price: number;
};

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "item",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      const order = column.getIsSorted();
      return (
        <div className="flex justify-end items-center">
          <Button
            size="sm"
            variant="ghost"
            className="p-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Price
            {order === "asc" ? (
              <ArrowDown className="ml-2 h-4 w-4" />
            ) : (
              <ArrowUp className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="font-medium text-right pr-5 max-sm:pr-0">
          <p>{row.getValue("price")}</p>
        </div>
      );
    },
  },
];

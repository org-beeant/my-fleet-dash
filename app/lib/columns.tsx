"use client";

import { ColumnDef } from "@tanstack/react-table";
import clsx from "clsx";
import { Download, MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { History } from "./definitions";
import { Badge } from "~/components/ui/badge";

export const historyColumns: ColumnDef<History>[] = [
  {
    accessorKey: "jobid",
    header: "Job ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("jobid")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: "Submission Date",
    cell: ({ row }) => <div className="capitalize">{row.getValue("date")}</div>,
  },
  {
    accessorKey: "status",
    header: () => <div>Status</div>,
    cell: ({ row }) => {
      return (
        <div className="font-medium">
          <Badge
            className={clsx({
              "bg-green-900": row.getValue("status") === "Success",
              "bg-yellow-600": row.getValue("status") === "Processing",
              "bg-red-600": row.getValue("status") === "Failed",
            })}
          >
            {row.getValue("status")}
          </Badge>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div>Options</div>,
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.jobid)}
              className={clsx({
                "hidden md:hidden":
                  row.getValue("status") === "Failed" ||
                  row.getValue("status") === "Processing",
              })}
            >
              <Download></Download>
              Download
            </DropdownMenuItem>
            <DropdownMenuItem
              className={clsx({
                "hidden md:hidden":
                  row.getValue("status") === "Failed" ||
                  row.getValue("status") === "Processing",
              })}
            >
              <Trash2></Trash2> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

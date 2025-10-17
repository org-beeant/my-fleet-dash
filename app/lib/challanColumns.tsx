"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ChallanHistory } from "./definitions";

export const challanHistoryColumns: ColumnDef<ChallanHistory>[] = [
  {
    accessorKey: "SL #",
    header: "SL #",
    cell: ({ row }) => (
      <div className="capitalize text-xs">{row.getValue("SL #")}</div>
    ),
  },
  {
    accessorKey: "Checked Date",
    header: "Date",
    cell: ({ row }) => (
      <div className="capitalize text-xs">{row.getValue("Checked Date")}</div>
    ),
  },
  {
    accessorKey: "RC Number",
    header: "Vehicle RC Number",
    cell: ({ row }) => (
      <div className="capitalize text-xs">{row.getValue("RC Number")}</div>
    ),
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize text-xs">{row.getValue("Status")}</div>
    ),
  },
  {
    accessorKey: "Error Message",
    header: "Error Message",
    cell: ({ row }) => (
      <div className="capitalize text-xs">{row.getValue("Error Message")}</div>
    ),
  },
  {
    accessorKey: "Total Challans",
    header: "Total No. of Challans Found",
    cell: ({ row }) => (
      <div className="capitalize text-xs">{row.getValue("Total Challans")}</div>
    ),
  },
  /* {
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
  }, */
  /* {
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
  }, */
];

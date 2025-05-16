import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import { LoaderFunctionArgs } from "@remix-run/node";
import { fetchHistoricalData } from "~/lib/data";
import { History } from "~/lib/definitions";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export async function loader({ request }: LoaderFunctionArgs) {
  const fetchHistory = await fetchHistoricalData(1, 5);
  console.log("fetchHistory", fetchHistory);

  return { data: fetchHistory.data, totalRows: fetchHistory.totalRows };
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTableDemo<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [historyData, setHistoryData] = React.useState<History[]>([]);
  const [totalRows, setTotalRows] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(1);
  const [size, setSize] = React.useState<number>(5);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: data,
    columns: columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  console.log("table", table.getRowModel().rows);
  /*  React.useEffect(() => {
    const fetchHistory = async () => {
      const fetchHistory = await fetchHistoricalData(page, size);
      setHistoryData(fetchHistory.data);
      setTotalRows(fetchHistory.totalRows);
    };

    fetchHistory();
  }, [page, size]); */

  function handlePageChange(myPage: number) {
    setPage(myPage);
    const fetchHistory = async () => {
      const fetchHistory = await fetchHistoricalData(page, size);
      setHistoryData(fetchHistory.data);
    };

    fetchHistory();
  }

  return (
    <div className="bg-gray dark:bg-gray-200 p-4 ">
      <div className="w-full p-4 bg-white dark:bg-gray-200 rounded-lg shadow-md">
        <h6 className="text-xl font-bold text-center pb-4">History</h6>
        <div className="flex items-center py-4">
          {/* <Input
            placeholder="Filter jobid..."
            value={(table.getColumn("jobid")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("jobid")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          /> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        {/* <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {page * size} of {data?.totalRows} row(s).
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(page + 1)}
              disabled={!(page * size <= data?.totalRows)}
            >
              Next
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

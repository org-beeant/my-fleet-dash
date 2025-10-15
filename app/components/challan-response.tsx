import {
  CurrencyRupeeIcon,
  DocumentCheckIcon,
  DocumentCurrencyRupeeIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import {
  Calendar,
  CalendarDays,
  CheckCircle2,
  ChevronsUpDown,
  CircleXIcon,
  FileClock,
  IdCardIcon,
  IndianRupee,
  LayoutList,
  MapPin,
  MinusIcon,
  PlusIcon,
  ReceiptIndianRupee,
  SquareMinus,
  SquarePlus,
  TicketX,
  TimerIcon,
  Trash2,
  User2Icon,
  XCircleIcon,
} from "lucide-react";
import { ChallanResultInterface, RCResultInterface } from "~/lib/definitions";
import { Badge } from "./ui/badge";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export default function ChallanResponse({ data }: ChallanResultInterface) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <table className="min-w-full table-fixed">
      <thead>
        <tr>
          <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/3">
            Entities
          </th>
          <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
            Status/Details
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <TicketX className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Total No. of Challans
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span className="relative">
                {data.pendingChallanList.length +
                  data.disposedChallanList.length}
              </span>
            </span>
          </td>
        </tr>
        {/* <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <FileClock className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  No of Challans Pending
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span className="relative">{data.pendingChallanList.length}</span>
            </span>
          </td>
        </tr> */}
        {/* <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <Trash2 className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  No of Challans Disposed
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span className="relative">
                {data.disposedChallanList.length}
              </span>
            </span>
          </td>
        </tr> */}
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <CalendarDays className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Challans within last 3 months
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span className="relative">{data.challan_last_3_months}</span>
            </span>
          </td>
        </tr>
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <LayoutList className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Pending Challans
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            {/* <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span className="relative">{data.taxpaidupto}</span>
            </span> */}
            <Dialog>
              <div className="flex items-center gap-1">
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <SquarePlus />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </DialogTrigger>
                <span className="text-sm">
                  {data.pendingChallanList.length} Challans
                </span>
              </div>
              <DialogContent className="flex flex-col gap-2 sm:max-w-[725px] ">
                {/* <div className="rounded-md border px-4 py-2 font-mono text-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm">
                  @stitches/react
                </div> */}
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/3">
                        Date/Time
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Place
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        DriverName
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Fine Imposed
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Name of Violator
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Offence Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.pendingChallanList.map((challan, index) => (
                      <tr key={index} className="odd:bg-white even:bg-gray-50">
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {challan.date}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {challan.place}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {challan.name}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          <div className="flex items-center gap-1">
                            <IndianRupee className="size-5" />
                            {challan.amount}
                          </div>
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {challan.violator}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {challan.offence
                            .map((off) => `${off.section} - ${off.description}`)
                            .join(", ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </DialogContent>
            </Dialog>
          </td>
        </tr>
        {/** Insurance Validaity */}
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <LayoutList className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Disposed Challans
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            {/* <span className="relative inline-block px-3 font-semibold leading-tight">
              {data.InsuranceValidity ? (
                <CheckCircle2 className="size-7" color="white" fill="green" />
              ) : (
                <CircleXIcon className="size-7" color="white" fill="red" />
              )}
            </span> */}
            <Dialog>
              <div className="flex items-center gap-1">
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <SquarePlus />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </DialogTrigger>
                <span className="text-sm">
                  {data.disposedChallanList.length} Challans
                </span>
              </div>
              <DialogContent className="flex flex-col gap-2 md:max-w-[725px] ">
                {/* <div className="rounded-md border px-4 py-2 font-mono text-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm">
                  @stitches/react
                </div> */}
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/3">
                        Date/Time
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Place
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        DriverName
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Fine Imposed
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Name of Violator
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Offence Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.disposedChallanList.map((challan, index) => (
                      <tr key={index} className="odd:bg-white even:bg-gray-50">
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {challan.date}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {challan.place}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {challan.name}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          <ReceiptIndianRupee className="size-5" />
                          {challan.amount}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {challan.violator}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {challan.offence
                            .map((off) => `${off.section} - ${off.description}`)
                            .join(", ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </DialogContent>
            </Dialog>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

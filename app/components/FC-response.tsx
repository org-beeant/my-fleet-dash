import {
  CalendarDays,
  IndianRupee,
  LayoutList,
  SquarePlus,
  TicketX,
} from "lucide-react";
import React from "react";
import { ChallanResultInterface, FCResultInterface } from "~/lib/definitions";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export default function FCResponse({ data }: FCResultInterface) {
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
                <LayoutList className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">Tags List</p>
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
                  {data.tagsList.length} Tags Found
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
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/8">
                        Tag ID
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/8">
                        TID
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/8">
                        Vehicle Class
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/8">
                        Tag Status
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/8">
                        Issue Date
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/8">
                        EXCC Code
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/8">
                        Bank ID
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/8">
                        Com Vehicle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.tagsList.map((tag, index) => (
                      <tr key={index} className="odd:bg-white even:bg-gray-50">
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {tag.TAG_ID}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {tag.TID}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {tag.VEHICLE_CLASS}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {tag.TAG_STATUS}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {tag.ISSUE_DATE}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {tag.EXCC_CODE}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {tag.BANKID}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {tag.COMVEHICLE}
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

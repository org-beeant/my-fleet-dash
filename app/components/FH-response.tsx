import { LayoutList, SquarePlus } from "lucide-react";
import React from "react";
import { FHResultInterface } from "~/lib/definitions";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export default function FHResponse({ data }: FHResultInterface) {
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
                  {data.transList.length} Tags Found
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
                      <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/6">
                        Time
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/6">
                        Lane Direction
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/6">
                        Toll Plaza Geo Code
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/6">
                        Toll Plaza Name
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/6">
                        Vehicle Type
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/6">
                        Vehicle Reg No
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.transList.map((trans, index) => (
                      <tr key={index} className="odd:bg-white even:bg-gray-50">
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {trans.datetime}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {trans.laneDirection}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {trans.tollPlazaGeoCode}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {trans.tollPlazaName}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {trans.vehicleType}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {trans.vehicleRegNo}
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

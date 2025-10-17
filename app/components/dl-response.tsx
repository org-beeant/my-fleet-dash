import {
  CurrencyRupeeIcon,
  DocumentCheckIcon,
  DocumentCurrencyRupeeIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import {
  Calendar,
  CheckCircle2,
  CircleXIcon,
  IdCardIcon,
  LayoutList,
  MapPin,
  SquarePlus,
  TimerIcon,
  User2Icon,
  XCircleIcon,
} from "lucide-react";
import { DLResultInterface, RCResultInterface } from "~/lib/definitions";
import { Badge } from "./ui/badge";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";

export default function DLResponse({ data }: DLResultInterface) {
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
                <User2Icon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">Name</p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span className="relative">{data.Owner_Name}</span>
            </span>
          </td>
        </tr>
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <DocumentCheckIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Validity Status
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 font-semibold leading-tight">
              {data.DL_Valid === true ? (
                <CheckCircle2 className="size-7" color="white" fill="green" />
              ) : (
                <CircleXIcon className="size-7" color="white" fill="red" />
              )}
            </span>
          </td>
        </tr>
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <IdCardIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">DL Number</p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span className="relative">{data.DL_Number}</span>
            </span>
          </td>
        </tr>
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <Calendar className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">Issue Date</p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span className="relative">{data.Issue_Date}</span>
            </span>
          </td>
        </tr>
        {/** Insurance Validaity */}
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <Calendar className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">Issued Upto</p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span className="relative">{data.Expiry_Date}</span>
            </span>
          </td>
        </tr>
        {/** PUCC Certificate Validaity */}
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <LayoutList className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  List of Vehicles
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <Dialog>
              <div className="flex items-center gap-1">
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <SquarePlus />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </DialogTrigger>
                <span className="text-sm">
                  {data.vehicleList.length} Listed Vehicles
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
                        Class Of Vehicle
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Code
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Issued By
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Date Of Issue
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Vehicle Category
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Badge Number
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Badge Issue Date
                      </th>
                      <th className="px-3 py-3S border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
                        Badge Issued By
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.vehicleList.map((vehicle, index) => (
                      <tr key={index} className="odd:bg-white even:bg-gray-50">
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {vehicle.classOfVehicle}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {vehicle.code}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {vehicle.IssuedBy}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {vehicle.DateOfIssue}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {vehicle.VehicleCategory}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {vehicle.BadgeNumber}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {vehicle.BadgeDateOfIssue}
                        </td>
                        <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                          {vehicle.BadgeIssuedBy}
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

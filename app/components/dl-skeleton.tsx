import {
  CurrencyRupeeIcon,
  DocumentCheckIcon,
  DocumentCurrencyRupeeIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import {
  Badge,
  Calendar,
  IdCardIcon,
  LayoutList,
  MapPin,
  TimerIcon,
  User2Icon,
  XCircleIcon,
} from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Layout } from "~/root";

export default function DLSkeleton() {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/3">
            Entities
          </th>
          <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/3">
            Status/Details
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <User2Icon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">Name</p>
              </div>
            </div>
          </td>

          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <Skeleton className="h-4 w-full" />
          </td>
        </tr>
        <tr>
          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
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

          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <Skeleton className="h-4 w-full" />
          </td>
        </tr>
        <tr>
          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <IdCardIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">DL Number</p>
              </div>
            </div>
          </td>

          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <Skeleton className="h-4 w-full" />
          </td>
        </tr>
        <tr>
          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <Calendar className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">Issue Date</p>
              </div>
            </div>
          </td>

          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <Skeleton className="h-4 w-full" />
          </td>
        </tr>
        {/** Insurance Validaity */}
        <tr>
          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <Calendar className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">Issue Upto</p>
              </div>
            </div>
          </td>

          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <Skeleton className="h-4 w-full" />
          </td>
        </tr>
        {/** PUCC Certificate Validaity */}
        <tr>
          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
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

          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <Skeleton className="h-4 w-full" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

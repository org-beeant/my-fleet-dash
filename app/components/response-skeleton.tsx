import {
  CurrencyRupeeIcon,
  DocumentCheckIcon,
  DocumentCurrencyRupeeIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import {
  Badge,
  IdCardIcon,
  MapPin,
  TimerIcon,
  User2Icon,
  XCircleIcon,
} from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export default function ResponseSkeleton() {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Entities
          </th>
          <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
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
                <p className="text-gray-900 whitespace-no-wrap">Owner Name</p>
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
                <MapPin className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Registered At
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
                <p className="text-gray-900 whitespace-no-wrap">
                  RC Validity Status
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
                <DocumentCheckIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  TAX Validity Status
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
                <TimerIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  TAX Paid Upto
                </p>
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
                <DocumentCurrencyRupeeIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Insurance Validity Status
                </p>
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
                <DocumentIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  PUCC Certificate Validity Status
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <Skeleton className="h-4 w-full" />
          </td>
        </tr>
        {/** Fincance Validaity */}
        <tr>
          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <CurrencyRupeeIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Financed/Not Financed
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
                <XCircleIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Is Blacklisted
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
                <MapPin className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Permit Validity Status
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
                <TimerIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Permit Valid Upto
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

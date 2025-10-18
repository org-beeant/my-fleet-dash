import { CalendarDays, LayoutList, TicketX } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export default function FHSkeleton() {
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
        {/*  <tr>
          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
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

          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <Skeleton className="h-4 w-full" />
          </td>
        </tr> */}
        {/* <tr>
          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
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

          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <Skeleton className="h-4 w-full" />
          </td>
        </tr> */}
        {/** Insurance Validaity */}
        <tr>
          <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-5 h-5">
                <LayoutList className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">Tags List</p>
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

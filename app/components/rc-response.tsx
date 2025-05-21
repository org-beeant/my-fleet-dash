import {
  CurrencyRupeeIcon,
  DocumentCheckIcon,
  DocumentCurrencyRupeeIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import {
  CheckCircle2,
  CircleXIcon,
  IdCardIcon,
  MapPin,
  TimerIcon,
  User2Icon,
  XCircleIcon,
} from "lucide-react";
import { RCResultInterface } from "~/lib/definitions";
import { Badge } from "./ui/badge";

export default function RcResponse({ data }: RCResultInterface) {
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
                <p className="text-gray-900 whitespace-no-wrap">Owner Name</p>
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
                <MapPin className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Registered At
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span className="relative">{data.RegisteredAt}</span>
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
                <p className="text-gray-900 whitespace-no-wrap">
                  RC Validity Status
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 font-semibold leading-tight">
              {data.RC_Valid === true ? (
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
                <DocumentCheckIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  TAX Validity Status
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 font-semibold leading-tight">
              {new Date(data.taxpaidupto) > new Date() ? (
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
                <TimerIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  TAX Paid Upto
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span className="relative">{data.taxpaidupto}</span>
            </span>
          </td>
        </tr>
        {/** Insurance Validaity */}
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
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

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 font-semibold leading-tight">
              {data.InsuranceValidity ? (
                <CheckCircle2 className="size-7" color="white" fill="green" />
              ) : (
                <CircleXIcon className="size-7" color="white" fill="red" />
              )}
            </span>
          </td>
        </tr>
        {/** PUCC Certificate Validaity */}
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
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

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 font-semibold leading-tight">
              {data.PUCC_Validity === true ? (
                <CheckCircle2 className="size-7" color="white" fill="green" />
              ) : (
                <CircleXIcon className="size-7" color="white" fill="red" />
              )}
            </span>
          </td>
        </tr>
        {/** Fincance Validaity */}
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
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

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span className="relative">
                <Badge className="bg-gray-300 text-black">
                  {data.IsFinance ? "Financed" : "Not Financed"}
                </Badge>
              </span>
            </span>
          </td>
        </tr>
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
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

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 font-semibold leading-tight">
              <Badge
                className={clsx({
                  "bg-gray-300 text-black": data.Blacklisted === "No",
                  "bg-red-500": data.Blacklisted === "Yes",
                })}
              >
                {data.Blacklisted === "Yes" ? "Yes" : "N/A"}
              </Badge>
            </span>
          </td>
        </tr>
        <tr>
          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
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

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              {new Date(data.Permit_Valid_Upto) > new Date() ? (
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
                <TimerIcon className="size-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Permit Valid Upto
                </p>
              </div>
            </div>
          </td>

          <td className="px-3 py-1 border-b border-gray-200 bg-white text-xs">
            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
              <span className="relative">{data.Permit_Valid_Upto}</span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

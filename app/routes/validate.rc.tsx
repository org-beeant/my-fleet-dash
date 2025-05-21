import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import dummyjson from "dummy-json";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { DataTableHistory } from "~/components/history-data-table";
import RcResponse from "~/components/rc-response";
import ResponseSkeleton from "~/components/response-skeleton";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";
import { historyColumns } from "~/lib/columns";
import { fetchHistoricalData } from "~/lib/data";
import { History } from "~/lib/definitions";
import { SessionStorage } from "~/services/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  let session = await SessionStorage.getSession(request.headers.get("cookie"));
  let user = session.get("user");
  if (!user) {
    return redirect("/login");
  }

  const fetchHistory = await fetchHistoricalData();
  return { historydata: fetchHistory.data, totalRows: fetchHistory.totalRows };
}

const template = `{
  "Owner_Name": "{{random 'iThink logistics' 'Aegis Logistics Ltd' 'Allcargo Logistics Ltd' 'Apollo LogiSolutions Ltd' 'Container Corporation Of India Ltd' 'Gati Ltd' 'Mahindra Logistics Ltd' 'Sical Logistics Ltd' 'TCI Express Ltd' 'Container Corporation Of India Ltd' 'Gati Ltd'}}",
  "age": "{{int 18 65}}",
  "address": "{{random '101-201, CTS No-100, Village Malad, JN of S.V.Road and Shantilal Modi Road, S.V. Road, Kandiv ali (West) , Mumbai, Maharashtra, India - 400067' '502, 5th Floor, Skylon Co-op Housing Society Ltd, GIDC, Char Rasta, Vapi, Gujarat 396195' 'House, 54, Montieth Mansion, SBL, 28, Red Cross Rd, Egmore, Chennai, Tamil Nadu 600008'}}",
  "city": "{{city}}",
  "RC_Valid": {{boolean}},
  "taxvalidity": {{boolean}},
  "taxpaidupto": "{{date '2022-01-01' '2029-12-31' 'YYYY-MM-DD'}}",
  "InsuranceValidity": {{boolean}},
  "PUCC_Validity": {{boolean}},
  "IsFinance": {{boolean}},
  "Blacklisted": "{{random 'Yes' 'No'}}",
  "RegisteredAt": "{{random 'Mumbai' 'Pune'}}",
  "Permit_Validity": {{boolean}},
  "Permit_Valid_Upto": "{{date '2022-01-01' '2029-12-31' 'YYYY-MM-DD'}}"
}`;

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const rcnumber = body.get("rcnumber");
  //Process the rcnumber here

  const result = dummyjson.parse(template);

  return JSON.parse(result);
}

export default function ValidateRCNumber() {
  const data = useActionData<typeof action>();
  const [loader, setLoader] = useState(false);
  const { historydata, totalRows } = useLoaderData<{
    historydata: History[];
    totalRows: number;
  }>();

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-3">
      <Card className="flex-1 h-[550px] md:col-span-1">
        <CardHeader>
          <CardTitle>Validate Through RC Number</CardTitle>
          <CardDescription className="truncate"></CardDescription>
        </CardHeader>
        <CardContent>
          <Form method="post" className="flex flex-col space-y-4">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="rcnumber">RC Number</Label>
                <div className="flex flex-row justify-between items-center gap-3">
                  <Input
                    type="text"
                    id="rcnumber"
                    name="rcnumber"
                    placeholder="RC Number"
                    required
                  />
                  <button type="submit">
                    <SearchIcon className="h-5 w-5 cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-row justify-center items-center gap-3">
              <Button className="bg-mytheme" type="submit">
                Submit
              </Button>
              <Button
                className="bg-mytheme"
                onClick={() => window.location.reload()}
              >
                Cancel
              </Button>
            </div> */}
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col justify-center overflow-auto gap-2">
          {data && (
            <>
              <Separator />
              <div className="flex flex-col p-2 border bg-gray-300 rounded-lg mt-3 mb-3 w-full">
                <table>
                  <tbody>
                    <tr>
                      <td className="px-3 py-2 w-1/4 text-sm font-semibold align-top">
                        Owner:
                      </td>
                      <td className="px-3 py-2 text-xs w-3/4 italic">
                        {data.Owner_Name}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 align-top text-sm font-semibold">
                        Registed Address:
                      </td>
                      <td className="px-3 py-2 text-xs italic">
                        {data.address}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Separator />
              <div className="flex flex-col p-2 border rounded-lg mt-3 gap-5 w-full">
                <table>
                  <tbody>
                    <tr>
                      <td className="px-3 py-2 w-2/3 text-sm font-semibold align-top">
                        Valid Entities:
                      </td>
                      <td className="px-3 py-2 text-xs w-1/3 italic">
                        {(data.RC_Valid ? 1 : 0) +
                          (new Date(data.taxpaidupto) > new Date() ? 1 : 0) +
                          (data.InsuranceValidity ? 1 : 0) +
                          (data.puccvalidity ? 1 : 0) +
                          (new Date(data.Permit_Valid_Upto) > new Date()
                            ? 1
                            : 0) +
                          (data.blacklisted !== "Yes" ? 1 : 0)}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 align-top text-sm font-semibold">
                        Invalid Entities:
                      </td>
                      <td className="px-3 py-2 text-xs italic">
                        {(!data.RC_Valid ? 1 : 0) +
                          (new Date(data.taxpaidupto) < new Date() ? 1 : 0) +
                          (!data.InsuranceValidity ? 1 : 0) +
                          (!data.puccvalidity ? 1 : 0) +
                          (new Date(data.Permit_Valid_Upto) < new Date()
                            ? 1
                            : 0) +
                          (data.blacklisted === "Yes" ? 1 : 0)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex flex-row justify-center items-center mb-2 gap-3">
                  <Button className="bg-green-700 h-7">Approve</Button>
                  <Button className="bg-red-900 h-7">Reject</Button>
                </div>
              </div>
            </>
          )}
        </CardFooter>
      </Card>
      <Card className="flex-1 h-[550px] md:col-span-2">
        <CardHeader>
          <CardTitle>Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg p-2 min-h-[45px]">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                {data ? (
                  <RcResponse data={data} />
                ) : (
                  <>
                    <ResponseSkeleton />
                  </>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-center"></CardFooter>
      </Card>
      {/*  <DataTableDemo /> */}
      <DataTableHistory
        data={historydata}
        columns={historyColumns}
        totalRows={totalRows}
        className="bg-card rounded-xl border p-1 md:col-span-3 shadow"
      />
      {/* <div className="md:col-span-3">
        <div className="ml-2 mb-3">
          <span className="text-medium font-bold">History</span>
        </div>

        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Sno
              </th>
              <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Validate RC Number
              </th>
              <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Chassis Number
              </th>
              <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Owner
              </th>
              <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Registered At
              </th>
              <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Remarks
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                1
              </td>

              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                15-May-2025 12:00 PM
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                MH11AZ8892
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                CHS123123XXX92323
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                ABC Logistics
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                Mumbai
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                Authorized to Enter
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs"></td>
            </tr>
            <tr>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                2
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                15-May-2025 14:00 PM
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                TN11AZ8893
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                CHS123123XXX92333
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                XYZ Logistics
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                Chennai
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                Authorized to Enter
              </td>
              <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs"></td>
            </tr>
          </tbody>
        </table>
      </div> */}
      {loader && (
        <>
          <div className="bg-gray-500/50 absolute size-full"></div>
          <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <span className="loader text-primary"></span>
          </div>
        </>
      )}
    </div>
  );
}

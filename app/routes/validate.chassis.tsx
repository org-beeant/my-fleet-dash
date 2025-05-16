import {
  ActionFunction,
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
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
import { SessionStorage } from "~/services/auth.server";
import dummyjson from "dummy-json";
import {
  CroissantIcon,
  CrosshairIcon,
  CrossIcon,
  IdCardIcon,
  LocateFixedIcon,
  LocateIcon,
  MapPin,
  TimerIcon,
  User2Icon,
  XCircleIcon,
} from "lucide-react";
import { Badge } from "~/components/ui/badge";
import clsx from "clsx";
import {
  CurrencyRupeeIcon,
  DocumentCheckIcon,
  DocumentCurrencyRupeeIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

export async function loader({ request }: LoaderFunctionArgs) {
  let session = await SessionStorage.getSession(request.headers.get("cookie"));
  let user = session.get("user");
  if (!user) {
    return redirect("/login");
  }
  return null;
}

const template = `{
  "Owner_Name": "{{firstName}}",
  "age": "{{int 18 65}}",
  "address": "{{int 1 100}} {{street}}",
  "city": "{{city}}",
  "RC_Valid": {{boolean}},
  "taxvalidity": {{boolean}},
  "taxpaidupto": "{{date '2028-01-01' '2029-12-31' 'YYYY-MM-DD'}}",
  "InsuranceValidity": {{boolean}},
  "PUCC_Validity": {{boolean}},
  "IsFinance": {{boolean}},
  "Blacklisted": "{{random 'Yes' 'No'}}",
  "RegisteredAt": "{{random 'Salem' 'Chennai' 'Coimbatore' 'Madurai'  'Tirunelveli' 'Tirupur' 'Trichy'}}",
  "Permit_Validity": {{boolean}},
  "Permit_Valid_Upto": "{{date '2025-01-01' '2029-12-31' 'YYYY-MM-DD'}}"
}`;

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const rcnumber = body.get("rcnumber");
  //Process the rcnumber here

  const result = dummyjson.parse(template);

  return result;
}

export default function ValidateRCNumber() {
  const data = useActionData<typeof action>();

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 lg:grid-cols-2">
      <Card className="flex-1 h-[620px]">
        <Form method="post">
          <CardHeader>
            <CardTitle>Validate Through Chassis Number</CardTitle>
            <CardDescription className="truncate"></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="rcnumber">Chassis Number</Label>
                <Input
                  type="text"
                  id="rcnumber"
                  name="rcnumber"
                  placeholder="Chassis Number"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-center overflow-auto">
            <div className="flex flex-row justify-between items-center gap-4">
              <Button className="flex-1 bg-mytheme" type="submit">
                Submit
              </Button>
              <Button
                className="flex-1 bg-mytheme"
                onClick={() => window.location.reload()}
              >
                Cancel
              </Button>
            </div>
          </CardFooter>
        </Form>
      </Card>
      <Card className="flex-1 h-[620px]">
        <CardHeader>
          <CardTitle>Status</CardTitle>
          <CardDescription className="truncate">
            {/* Stauts of the upload process will be shown here. */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg p-2 min-h-[45px]">
            {data ? (
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Entities
                        </th>
                        <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Status/Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
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
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span className="relative">
                              <Badge
                                className={clsx({
                                  "bg-green-900":
                                    JSON.parse(data).RC_Valid === true,
                                  "bg-red-600":
                                    JSON.parse(data).RC_Valid === false,
                                })}
                              >
                                {JSON.parse(data).RC_Valid
                                  ? "Valid"
                                  : "Invalid"}
                              </Badge>
                            </span>
                          </span>
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
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span className="relative">
                              <Badge
                                className={clsx({
                                  "bg-green-900":
                                    JSON.parse(data).RC_Valid === true,
                                  "bg-red-600":
                                    JSON.parse(data).RC_Valid === false,
                                })}
                              >
                                {JSON.parse(data).RC_Valid
                                  ? "Valid"
                                  : "Invalid"}
                              </Badge>
                            </span>
                          </span>
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
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                            <span className="relative">
                              {JSON.parse(data).taxpaidupto}
                            </span>
                          </span>
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
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span className="relative">
                              <Badge
                                className={clsx({
                                  "bg-green-900":
                                    JSON.parse(data).InsuranceValidity === true,
                                  "bg-red-600":
                                    JSON.parse(data).InsuranceValidity ===
                                    false,
                                })}
                              >
                                {JSON.parse(data).InsuranceValidity
                                  ? "Valid"
                                  : "Invalid"}
                              </Badge>
                            </span>
                          </span>
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
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span className="relative">
                              <Badge
                                className={clsx({
                                  "bg-green-900":
                                    JSON.parse(data).PUCC_Validity === true,
                                  "bg-red-600":
                                    JSON.parse(data).PUCC_Validity === false,
                                })}
                              >
                                {JSON.parse(data).PUCC_Validity
                                  ? "Valid"
                                  : "Invalid"}
                              </Badge>
                            </span>
                          </span>
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
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span className="relative">
                              <Badge className="bg-gray-300 text-black">
                                {JSON.parse(data).IsFinance
                                  ? "Financed"
                                  : "Not Financed"}
                              </Badge>
                            </span>
                          </span>
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
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span className="relative">
                              <Badge
                                className={clsx({
                                  "bg-green-900":
                                    JSON.parse(data).Blacklisted === "No",
                                  "bg-red-600":
                                    JSON.parse(data).Blacklisted === "Yes",
                                })}
                              >
                                {JSON.parse(data).Blacklisted}
                              </Badge>
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-5 h-5">
                              <User2Icon className="size-5" />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Owner Name
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-3 py-2 border-b border-gray-200 bg-white text-xs">
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                            <span className="relative">
                              {JSON.parse(data).Owner_Name}
                            </span>
                          </span>
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
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                            <span className="relative">
                              {JSON.parse(data).RegisteredAt}
                            </span>
                          </span>
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
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                            <span className="relative">
                              <Badge
                                className={clsx({
                                  "bg-green-900":
                                    JSON.parse(data).Permit_Validity === true,
                                  "bg-red-600":
                                    JSON.parse(data).Permit_Validity === false,
                                })}
                              >
                                {JSON.parse(data).Permit_Validity
                                  ? "Valid"
                                  : "Invalid"}
                              </Badge>
                            </span>
                          </span>
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
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                            <span className="relative">
                              {JSON.parse(data).Permit_Valid_Upto}
                            </span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <p className="text-gray-700">Your Response will be shown here.</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-center"></CardFooter>
      </Card>
    </div>
  );
}

import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import dummyjson from "dummy-json";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { DLDataTableHistory } from "~/components/DL-data-table";
import DLResponse from "~/components/dl-response";
import DLSkeleton from "~/components/dl-skeleton";
import RcResponse from "~/components/rc-response";
import ResponseSkeleton from "~/components/response-skeleton";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { fetchAllDLHistoryData } from "~/lib/data";
import { DLHistory } from "~/lib/definitions";
import { DLHistoryColumns } from "~/lib/DLColumns";
import { SessionStorage } from "~/services/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  let session = await SessionStorage.getSession(request.headers.get("cookie"));
  let user = session.get("user");
  if (!user) {
    return redirect("/login");
  }
  const fetchHistory = await fetchAllDLHistoryData(1, 5);
  return { historydata: fetchHistory.data, totalRows: fetchHistory.totalRows };
}

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

const template = `{
  "Owner_Name": "{{random 'iThink logistics' 'Aegis Logistics Ltd' 'Allcargo Logistics Ltd' 'Apollo LogiSolutions Ltd' 'Container Corporation Of India Ltd' 'Gati Ltd' 'Mahindra Logistics Ltd' 'Sical Logistics Ltd' 'TCI Express Ltd' 'Container Corporation Of India Ltd' 'Gati Ltd'}}",
  "age": "{{int 18 65}}",
  "address": "{{int 1 100}} {{street}}",
  "city": "{{city}}",
  "DL_Valid": {{boolean}},
  "DL_Number": "DL{{int 1000000000 9999999999}}",
  "Issue_Date": "{{date '2015-01-01' '2024-12-31' 'YYYY-MM-DD'}}",
  "Expiry_Date": "{{date '2025-01-01' '2030-12-31' 'YYYY-MM-DD'}}",
  "vehicleList": [
    {{#repeat min=1 max=2}}
    {
      "classOfVehicle": "{{random 'Motorcycle' 'Car'}}",
      "code": "{{random 'LMV' 'MCWG' 'MCWOG'}}",
      "IssuedBy": "{{random 'TN27' 'TN54' 'TN09' 'TN22' 'TN45'}}",
      "DateOfIssue": "{{date '2023-01-01' '2024-06-30' 'YYYY-MM-DD'}}",
      "VehicleCategory": "{{random 'NT'}}",
      "BadgeNumber": "{{random '' 'B1234' 'B5678' 'B91011'}}",
      "BadgeIssuedBy": "{{random '' 'TN27' 'TN54' 'TN09' 'TN22' 'TN45'}}",
      "BadgeDateOfIssue": "{{date '2020-01-01' '2024-06-30' 'YYYY-MM-DD'}}"
    }
    {{/repeat}}
  ]
}`;

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const rcnumber = body.get("dlnumber");
  //Process the rcnumber here

  const result = dummyjson.parse(template);

  return JSON.parse(result);
}

export default function ValidateDLNumber() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    new Date("2025-06-01")
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [value, setValue] = React.useState(formatDate(date));

  const data = useActionData<typeof action>();
  const { historydata, totalRows } = useLoaderData<{
    historydata: DLHistory[];
    totalRows: number;
  }>();

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-3">
      <Card className="flex-1 h-[400px]">
        <Form method="post">
          <CardHeader>
            <CardTitle>Driving License Validation</CardTitle>
            <CardDescription className="truncate"></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="rcnumber">DL Number</Label>
                <Input
                  type="text"
                  id="dlnumber"
                  name="dlnumber"
                  placeholder="DL Number"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dob">Date of Birth</Label>
                <div className="relative flex gap-2">
                  <Input
                    id="date"
                    value={value}
                    placeholder="June 01, 2025"
                    className="bg-background pr-10"
                    onChange={(e) => {
                      const date = new Date(e.target.value);
                      setValue(e.target.value);
                      if (isValidDate(date)) {
                        setDate(date);
                        setMonth(date);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setOpen(true);
                      }
                    }}
                  />
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        id="date-picker"
                        variant="ghost"
                        className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                      >
                        <CalendarIcon className="size-3.5" />
                        <span className="sr-only">Select date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="end"
                      alignOffset={-8}
                      sideOffset={10}
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        month={month}
                        onMonthChange={setMonth}
                        onSelect={(date) => {
                          setDate(date);
                          setValue(formatDate(date));
                          setOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
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
      <Card className="flex-1 h-[400px] md:col-span-2">
        <CardHeader>
          <CardTitle>Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg p-2 min-h-[45px]">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                {data ? (
                  <DLResponse data={data} />
                ) : (
                  <>
                    <DLSkeleton />
                  </>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-center"></CardFooter>
      </Card>
      <DLDataTableHistory
        data={historydata}
        columns={DLHistoryColumns}
        totalRows={totalRows}
        className="bg-card rounded-xl border p-1 md:col-span-3 shadow"
      />
    </div>
  );
}

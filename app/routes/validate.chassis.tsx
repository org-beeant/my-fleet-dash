import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import dummyjson from "dummy-json";
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
import { historyColumns } from "~/lib/columns";
import { fetchHistoricalData } from "~/lib/data";
import { SessionStorage } from "~/services/auth.server";
import { History } from "~/lib/definitions";

export async function loader({ request }: LoaderFunctionArgs) {
  let session = await SessionStorage.getSession(request.headers.get("cookie"));
  let user = session.get("user");
  if (!user) {
    return redirect("/login");
  }
  const fetchHistory = await fetchHistoricalData(1, 5);
  return { historydata: fetchHistory.data, totalRows: fetchHistory.totalRows };
}

const template = `{
  "Owner_Name": "{{random 'iThink logistics' 'Aegis Logistics Ltd' 'Allcargo Logistics Ltd' 'Apollo LogiSolutions Ltd' 'Container Corporation Of India Ltd' 'Gati Ltd' 'Mahindra Logistics Ltd' 'Sical Logistics Ltd' 'TCI Express Ltd' 'Container Corporation Of India Ltd' 'Gati Ltd'}}",
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
  "RegisteredAt": "{{random 'Mumbai' 'Pune'}}",
  "Permit_Validity": {{boolean}},
  "Permit_Valid_Upto": "{{date '2025-01-01' '2029-12-31' 'YYYY-MM-DD'}}"
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
  const { historydata, totalRows } = useLoaderData<{
    historydata: History[];
    totalRows: number;
  }>();

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-3">
      <Card className="flex-1 h-[550px]">
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
      <DataTableHistory
        data={historydata}
        columns={historyColumns}
        totalRows={totalRows}
        className="bg-card rounded-xl border p-1 md:col-span-3 shadow"
      />
    </div>
  );
}

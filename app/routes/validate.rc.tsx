import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
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

export async function loader({ request }: LoaderFunctionArgs) {
  let session = await SessionStorage.getSession(request.headers.get("cookie"));
  let user = session.get("user");
  if (!user) {
    return redirect("/login");
  }
  return null;
}

export default function ValidateRCNumber() {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 lg:grid-cols-2">
      <Card className="flex-1 h-[300px]">
        <Form>
          <CardHeader>
            <CardTitle>Validate Through RC Number</CardTitle>
            <CardDescription className="truncate"></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="rcnumber">RC Number</Label>
                <Input type="text" id="rcnumber" placeholder="RC Number" />
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
      <Card className="flex-1 h-[300px]">
        <CardHeader>
          <CardTitle>Status</CardTitle>
          <CardDescription className="truncate">
            Stauts of the upload process will be shown here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-gray-300 p-4 min-h-[180px]">
            <p className="text-gray-700">Your Response will be shown here.</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-center"></CardFooter>
      </Card>
    </div>
  );
}

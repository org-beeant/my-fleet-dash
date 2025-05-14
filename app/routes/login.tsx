// First we create our UI with the form doing a POST and the inputs with

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, redirect, useActionData, useLoaderData } from "@remix-run/react";
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
import { authenticator, SessionStorage } from "~/services/auth.server";

// the names we are going to use in the strategy
export default function Component() {
  const data = useActionData<typeof action>();
  return (
    /*  <div>
      <h1>Login</h1>

      <Form method="post">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit">Sign In</button>
      </Form>
    </div> */

    <div className="flex flex-col justify-center items-center h-screen bg-gray-200 dark:bg-white">
      <h6 className="text-xl font-bold text-center pb-7">
        <br /> Fleet Management
        <br />
        <span className="text-sm">by Aureole Soft-I </span>
      </h6>
      <Form method="post">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your email and password to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input name="email" placeholder="Username" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Password</Label>

                <Input name="password" placeholder="password" type="password" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-center">
            <Button className="w-full" type="submit">
              Login
            </Button>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {data?.error && (
                <>
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">{data?.error}</p>
                </>
              )}
            </div>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );
}

// Second, we need to export an action function, here we will use the
// `authenticator.authenticate` method
export async function action({ request }: ActionFunctionArgs) {
  try {
    // we call the method with the name of the strategy we want to use and the
    // request object
    let user = await authenticator.authenticate("user-pass", request);

    let session = await SessionStorage.getSession(
      request.headers.get("cookie")
    );

    session.set("user", user);

    // Redirect to the home page after successful login
    return redirect("/", {
      headers: {
        "Set-Cookie": await SessionStorage.commitSession(session),
      },
    });
  } catch (error) {
    // Return validation errors or authentication errors
    if (error instanceof Error) {
      return { error: error.message };
    }

    // Re-throw any other errors (including redirects)
    throw error;
  }
}

// Finally, we need to export a loader function to check if the user is already
// authenticated and redirect them to the dashboard
export async function loader({ request }: LoaderFunctionArgs) {
  let session = await SessionStorage.getSession(request.headers.get("cookie"));
  let user = session.get("user");

  // If the user is already authenticated redirect to the dashboard
  if (user) return redirect("/");

  // Otherwise return null to render the login page
  return null;
}

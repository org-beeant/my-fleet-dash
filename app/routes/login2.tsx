// First we create our UI with the form doing a POST and the inputs with

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, redirect, useActionData, useLoaderData } from "@remix-run/react";
import { BusFront, GalleryVerticalEnd, Truck, TruckIcon } from "lucide-react";
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
  //let session = await SessionStorage.getSession(request.headers.get("cookie"));
  //let user = session.get("user");

  // If the user is already authenticated redirect to the dashboard
  //if (user) return redirect("/");

  // Otherwise return null to render the login page
  return null;
}

// the names we are going to use in the strategy
export default function Login2() {
  const data = useActionData<typeof action>();
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                {/*  <h1 className="text-2xl font-bold">Fleet Management System</h1> */}
                <div className="flex h-8 items-end space-x-1">
                  <BusFront
                    className="h-8 w-8 text-mytheme"
                    color="black"
                    fill="green"
                  />
                  <h1 className="text-2xl font-bold">Fleet Management Login</h1>
                </div>
                <p className="text-balance text-sm text-muted-foreground">
                  Enter your email below to login to your account
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {/* <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a> */}
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                {data?.error && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{data?.error}</p>
                  </>
                )}
              </div>
              <div className="text-center text-xs">
                <p className="text-muted-foreground text-black-900 dark:text-white italic">
                  Powered by Aureolesofti
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

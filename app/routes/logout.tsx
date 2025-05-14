import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { SessionStorage } from "~/services/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    let session = await SessionStorage.getSession(
      request.headers.get("cookie")
    );
    return redirect("/login", {
      headers: { "Set-Cookie": await SessionStorage.destroySession(session) },
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

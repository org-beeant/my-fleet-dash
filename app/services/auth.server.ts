import { createCookieSessionStorage } from "@remix-run/node";
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";

// Define your user type
type User = {
  id: string;
  email: string;
  name: string;
  // ... other user properties
};

// Create a session storage
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cr3t"], // replace this with an actual secret
    secure: true,
  },
});

// Your authentication logic (replace with your actual DB/API calls)
async function login(email: string, password: string): Promise<User> {
  // Mock implementation: Replace with actual DB/API call
  if (email === "admin@example.com" && password === "password123") {
    return {
      id: "1",
      email: "test@example.com",
      name: "Test User",
      // ... other user properties
    };
  }
  throw new Error("Invalid email or password");
}

// Create an instance of the authenticator, pass a generic with what
// strategies will return
const authenticator = new Authenticator<User>();

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    // the type of this user must match the type you pass to the
    // Authenticator the strategy will automatically inherit the type if
    // you instantiate directly inside the `use` method
    return await login(email, password);
  }),
  // each strategy has a name and can be changed to use the same strategy
  // multiple times, especially useful for the OAuth2 strategy.
  "user-pass"
);

export { authenticator, sessionStorage };

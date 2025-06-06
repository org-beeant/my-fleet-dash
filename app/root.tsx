import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import styles from "./tailwind.css?url";
import { Toaster } from "./components/ui/toaster";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import MyNavBar from "./components/nav-bar";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "stylesheet", href: styles },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  //check the page is login or not
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      <SidebarProvider>
        {/* If the page is not login, show the sidebar */}
        {!isLoginPage && <AppSidebar />}
        <div className="flex flex-col flex-1">
          {!isLoginPage && (
            <div
              className="flex flex-row items-center"
              style={{ backgroundColor: "#1567da" }}
            >
              <SidebarTrigger className="hover:text-black hover:bg-[#1567da] text-white" />
              <div className="flex flex-col flex-1">
                <MyNavBar />
              </div>
            </div>
          )}
          <Outlet />
        </div>
      </SidebarProvider>

      <Toaster />
    </>
  );
}

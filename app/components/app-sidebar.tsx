import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "./ui/sidebar";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Link } from "@remix-run/react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Vehicle Management",
      url: "#",
      items: [
        {
          title: "Validate - RC Number",
          url: "/validate/rc",
        },
        {
          title: "Validate - Chassis Number",
          url: "/validate/chassis",
        },
        {
          title: "Traffic Challan Check",
          url: "/login2",
        },
        {
          title: "Fastag Check",
          url: "#",
        },
      ],
    },
    {
      title: "Personnel Management",
      url: "#",
      items: [
        {
          title: "DL Validation of Driver",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              {/* <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div> */}
              <div className="flex flex-col gap-0.5 leading-none h-auto">
                {/* <span className="text-xl font-bold">Aureole Soft-I</span>
                 */}
                <Link to="/">
                  <img src="/logo.jpeg" alt="logo" width="75" height="75" />
                </Link>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 0}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <ChevronDown className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <ChevronUp className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild>
                              <Link to={item.url} className="text-xs">
                                {item.title}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

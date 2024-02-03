import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Expenses",
      href: "/dashboard",
      icon: "receiptText",
    },
    {
      title: "Friends",
      href: "/dashboard/friends",
      icon: "user",
    },
    {
      title: "Groups",
      href: "/dashboard/groups",
      icon: "users",
      disabled: true,
    },
    {
      title: "Activity",
      href: "/dashboard/activity",
      icon: "lineChart",
      disabled: true,
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
      disabled: true,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}

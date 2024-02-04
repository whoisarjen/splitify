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
    },
    {
      title: "Activity",
      href: "/dashboard/activity",
      icon: "lineChart",
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
  footerNav: [
    {
      title: "Friends",
      href: "/dashboard/friends",
      icon: "user",
    },
    {
      title: "Groups",
      href: "/dashboard/groups",
      icon: "users",
    },
    {
      title: "Expenses",
      href: "/dashboard",
      icon: "receiptText",
    },
    {
      title: "Activity",
      href: "/dashboard/activity",
      icon: "lineChart",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}

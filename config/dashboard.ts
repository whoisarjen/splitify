import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Dokumentacja",
      href: "/docs",
    },
    {
      title: "Wsparcie",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Wydatki",
      href: "/dashboard",
      icon: "receiptText",
    },
    {
      title: "Znajomi",
      href: "/dashboard/friends",
      icon: "user",
    },
    {
      title: "Grupy",
      href: "/dashboard/groups",
      icon: "users",
    },
    {
      title: "Historia",
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
      title: "Ustawienia",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
  footerNav: [
    {
      title: "Znajomi",
      href: "/dashboard/friends",
      icon: "user",
    },
    {
      title: "Grupy",
      href: "/dashboard/groups",
      icon: "users",
    },
    {
      title: "Wydatki",
      href: "/dashboard",
      icon: "receiptText",
    },
    {
      title: "Historia",
      href: "/dashboard/activity",
      icon: "lineChart",
    },
    {
      title: "Ustawienia",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}

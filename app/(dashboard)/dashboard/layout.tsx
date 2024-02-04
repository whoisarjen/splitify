import { notFound } from "next/navigation"

import { DashboardNav } from "@/components/layout/nav"
import { NavBar } from "@/components/layout/navbar"
import { dashboardConfig } from "@/config/dashboard"
import { getCurrentUser } from "@/lib/session"
import { ContainerPullToRefresh } from "@/containers/ContainerPullToRefresh"
import { FooterMenuMobile } from "@/containers/FooterMenuMobile"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return (
    <>
      <div className="mb-8 flex min-h-screen flex-col space-y-6">
        <NavBar user={user} items={dashboardConfig.mainNav} scroll={false} />

        <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
          <aside className="hidden w-[200px] flex-col md:flex">
            <DashboardNav items={dashboardConfig.sidebarNav} />
          </aside>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            <ContainerPullToRefresh>
              {children}
            </ContainerPullToRefresh>
          </main>
        </div>
      </div>
      <FooterMenuMobile />
    </>
  )
}

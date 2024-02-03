import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/db"

export const metadata = {
  title: "Dashboard",
}

type GroupIdPageProps = {
    params: {
        groupId: string
    }
}

export default async function GroupIdPage({
    params: {
        groupId,
    }
}: GroupIdPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const group = await prisma.group.findFirstOrThrow({
    where: {
        id: groupId,
    }
  })

  return (
    <DashboardShell>
      <DashboardHeader heading={group.name} text={`Manage group ${group.name}.`}>
        <Button>Delete Group</Button>
        <Button>Save Changes</Button>
      </DashboardHeader>
      <div>
        dasasddsasa
      </div>
    </DashboardShell>
  )
}

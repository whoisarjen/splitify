import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Button, buttonVariants } from "@/components/ui/button"
import { prisma } from "@/lib/db"
import { cn } from "@/lib/utils"

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
    include: {
      users: true,
    },
    where: {
        id: groupId,
        users: {
          some: {
            user: {
              id: user.id,
            }
          }
        }
    }
  })

  return (
    <form>
      <DashboardShell>
        <DashboardHeader heading={group.name} text={`Manage group ${group.name}.`}>
          <div className="flex justify-end gap-4">
            <Button
              className={cn(
                buttonVariants({ variant: 'destructive' })
              )}
            >
              Leave Group
            </Button>
            <Button>
              Save Changes
            </Button>
          </div>
        </DashboardHeader>
        <div>
          dasasddsasa
        </div>
      </DashboardShell>
    </form>
  )
}

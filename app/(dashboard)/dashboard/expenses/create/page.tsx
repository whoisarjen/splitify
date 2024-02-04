import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { prisma } from "@/lib/db"
import { FormCreateExpense } from "@/containers/forms/FormCreateExpense"

export const metadata = {
  title: "Dashboard",
}

type ExpensesCreatePageProps = {
  searchParams: {
    type?: string
    targetId?: string
  }
}

export default async function ExpensesCreatePage({
  searchParams: {
    type,
    targetId,
  }
}: ExpensesCreatePageProps) {
  if ((type !== 'user' && type !== 'group') || !targetId) {
    throw new Error("URL searchParams are not correct")
  }

  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const target = type === 'user'
    ? await prisma.user.findFirstOrThrow({
      where: {
        id: targetId,
      }
    })
    : await prisma.group.findFirstOrThrow({
        where: {
          id: targetId,
        }
      })

  return (
    <DashboardShell>
      <DashboardHeader heading="Wydatek" text={`Stwórz nowy wydatek dla ${target.name}.`} />
      <FormCreateExpense
        userId={currentUser.id}
        targetId={targetId}
      />
    </DashboardShell>
  )
}

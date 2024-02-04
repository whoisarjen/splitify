import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn, timeAgo } from "@/lib/utils"
import Link from "next/link"
import { prisma } from "@/lib/db"
import { Icons } from "@/components/shared/icons"

export const metadata = {
  title: "Dashboard",
}

export default async function ActivityPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const expenses = await prisma.expense.findMany({
    include: {
      paidBy: {
        select: {
          id: true,
          name: true,
          image: true,
        }
      },
      oweBy: {
        select: {
          id: true,
          name: true,
          image: true,
        }
      },
    },
    where: {
      OR: [
        {
          paidById: currentUser.id,
        },
        {
          oweById: currentUser.id,
        },
      ]
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Aktywności" text="Historia twojej aktywności." />
        <div>
          {!!expenses.length
            ? (
              <div className="flex flex-col gap-4">
                {expenses.map(expense => (
                  <div
                    key={expense.id}
                    className="flex items-center"
                  >
                    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full">
                      <Icons.receiptText />
                    </span>
                    <div className="ml-4 space-y-1">
                      <p className={`text-sm font-medium leading-none ${expense.paidById === currentUser.id ? 'text-green-500' : 'text-red-500'}`}>{expense.name}</p>
                      {expense.paidById === currentUser.id
                        ? <p className="text-sm text-muted-foreground">Zapłaciłeś {expense.code} {expense.amount} za {expense.oweBy.name}</p>
                        : <p className="text-sm text-muted-foreground">{expense.oweBy.name} zapłacił {expense.code} {expense.amount} za Ciebie</p>
                      }
                      <p className="text-sm text-muted-foreground">{timeAgo(expense.createdAt)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )
            : (
              <EmptyPlaceholder>
                <EmptyPlaceholder.Icon name="post" />
                <EmptyPlaceholder.Title>Brak aktywności</EmptyPlaceholder.Title>
                <EmptyPlaceholder.Description>
                  Nie masz żadnej aktywności. Zacznij dodawać wydatki.
                </EmptyPlaceholder.Description>
                <Link href="/dashboard" className={cn(buttonVariants({ variant: 'outline' }))}>Dodaj wydatek</Link>
              </EmptyPlaceholder>
            )}
        </div>
    </DashboardShell>
  )
}

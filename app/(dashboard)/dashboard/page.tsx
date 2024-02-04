import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import _ from "lodash"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { prisma } from "@/lib/db"
import { UserAvatar } from "@/components/shared/user-avatar"
import { Icons } from "@/components/shared/icons"
import { getFriendData, getFriends } from "@/app/utils/friends.utils"
import Link from "next/link"
import { CustomEmptyPlaceholder } from "@/components/CustomEmptyPlaceholder/CustomEmptyPlaceholder"
import { getUnsettledExpenses } from "@/actions/expenses.action"
import { type ExpenseCounter } from "@prisma/client"

export const metadata = {
  title: "Dashboard",
}

type CardProps = {
  title: string
  description: string
  children: React.ReactNode
}

const Card = ({
  title,
  description,
  children,
}: CardProps) => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex-1 rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold leading-none tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {children}
      </div>
    </div>
  )
}

type CardContentProps = {
  id: string
  name: string | null
  image: string | null
  description: string
  customIcon?: React.ReactNode
  type: 'user' | 'group'
}

const CardContent = ({
  id,
  name,
  image,
  description,
  customIcon,
  type,
}: CardContentProps) => {
  return (
    <Link
      href={`/dashboard/expenses/create?type=${type}&targetId=${id}`}
      className="flex gap-6 p-6 hover:cursor-pointer hover:bg-accent hover:text-accent-foreground"
    >
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full">
            {customIcon || <UserAvatar user={{ name, image }} />}
          </span>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium leading-none">
              {name}
            </p>
            <p className="flex gap-2 text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default async function DashboardPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const [
    expenses,
    groups,
    { friends },
  ] = await Promise.all([
    prisma.expense.findMany({
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
          }
        ]
      },
      orderBy: {
        createdAt: 'desc',
      }
    }),
    prisma.group.findMany({
      include: {
        users: {
          select: {
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              }
            }
          }
        }
      },
      where: {
        users: {
          some: {
            user: {
              id: currentUser.id,
            }
          }
        },
        isActive: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    }),
    getFriends(currentUser),
  ])

  const UnsettledExpenses = await getUnsettledExpenses()

  const usersFromExpenses = expenses.map(expense => {
    if (expense.oweById === currentUser.id) {
      return expense.paidBy
    }

    return expense.oweBy
  })

  const uniqueUsersFromExpenses = _.uniqBy(usersFromExpenses, 'id')

  const transformUnsettledExpenses = (unsetlledExpenses: ({
    userPlus: {
        id: string;
        name: string | null;
        image: string | null;
    };
    userMinus: {
        id: string;
        name: string | null;
        image: string | null;
    };
} & ExpenseCounter)[]) => {
  return unsetlledExpenses.map(unsetlledExpense => {
    const isCurrentUserPlusUser = unsetlledExpense.userPlusId === currentUser.id

    return {
      ...unsetlledExpense,
      transformedTotalAmount: isCurrentUserPlusUser ? unsetlledExpense.totalAmount : -unsetlledExpense.totalAmount,
      targerUser: isCurrentUserPlusUser ? unsetlledExpense.userMinus : unsetlledExpense.userPlus,
    }
  })
}

  return (
    <DashboardShell>
      <DashboardHeader heading="Wydatki" text="Wybierz z kim chcesz utworzyć wydatek." />
      {transformUnsettledExpenses(UnsettledExpenses).map(UnsettledExpense => {
        return (
          <div key={UnsettledExpense.id}>
            {UnsettledExpense.targerUser.name}: {UnsettledExpense.transformedTotalAmount} {UnsettledExpense.code}
          </div>
        )
      })}
      {uniqueUsersFromExpenses.length > 0 &&
        <Card
          title="Ostatnio używani"
          description="Ostatnio wykorzystywane opcje."
        >
          {uniqueUsersFromExpenses.map(user =>
            <CardContent
              {...user}
              key={user.id}
              description={user.id}
              type='user'
            />
          )}
        </Card>
      }
      <Card
        title="Grupy"
        description="Grupy, których jesteś członkiem."
      >
        {groups.length > 0
          ? (
            groups.map(group =>
              <CardContent
                {...group}
                key={group.id}
                type='group'
                description={group.users.map(({ user }) => user.name).join(', ')}
                customIcon={<Icons.users className="size-4" />}
              />
            )
          )
          : (
            <CustomEmptyPlaceholder
              title="Brak grup"
              description="Nie masz żadnych grup. Utwórz nową."
              iconName="users"
              buttonText="Add group"
              href="/dashboard/groups"
            />
          )}
      </Card>
      <Card
        title="Znaomi"
        description="Użytkownicy, którzy są twoimi znajomymi."
      >
        {friends.length > 0
          ? (
            friends.map(friend =>
              <CardContent
                {...getFriendData(currentUser)(friend)}
                key={friend.id}
                description={friend.id}
                type='user'
              />
            )
          )
          : (
            <CustomEmptyPlaceholder
              title="Brak znaomych"
              description="Nie masz jeszcze znajomych. Dodaj ich."
              iconName="user"
              buttonText="Add friends"
              href="/dashboard/friends"
            />
          )
        }
      </Card>
    </DashboardShell>
  )
}

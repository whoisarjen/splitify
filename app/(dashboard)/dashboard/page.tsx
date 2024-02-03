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
      key={id}
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

  const usersFromExpenses = expenses.map(expense => {
    if (expense.oweById === currentUser.id) {
      return expense.paidBy
    }

    return expense.oweBy
  })

  const uniqueUsersFromExpenses = _.uniqBy(usersFromExpenses, 'id')

  return (
    <DashboardShell>
      <DashboardHeader heading="Expenses" text="Choose who owe you money." />
      <Card
        title="Recent"
        description="Users recently connected to you."
      >
        {uniqueUsersFromExpenses.map(user =>
          <CardContent
            {...user}
            description={user.id}
            type='user'
          />
        )}
      </Card>
      <Card
        title="Groups"
        description="Groups you are a member of."
      >
        {groups.map(group =>
          <CardContent
            {...group}
            type='group'
            description={group.users.map(({ user }) => user.name).join(', ')}
            customIcon={<Icons.users className="size-4" />}
          />
        )}
      </Card>
      <Card
        title="Friends"
        description="Users who are your friends."
      >
        {friends.map(friend =>
          <CardContent
            {...getFriendData(currentUser)(friend)}
            description={friend.id}
            type='user'
          />
        )}
      </Card>
    </DashboardShell>
  )
}

import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Button, buttonVariants } from "@/components/ui/button"
import { prisma } from "@/lib/db"
import { Input } from "@/components/ui/input"
import { UserAvatar } from "@/components/shared/user-avatar"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { revalidatePath } from "next/cache"
import { type Friend, type User } from "@prisma/client"
import { Icons } from "@/components/shared/icons"

export const metadata = {
  title: "Dashboard",
}

type UsersPageProps = {
  searchParams: {
      q?: string
  }
}

export default async function UsersPage({
  searchParams: {
    q = '',
  }
}: UsersPageProps) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          AND: [
            {
              id: {
                contains: q,
                mode: 'insensitive',
              },
            },
            {
              id: {
                not: currentUser.id,
              },
            },
          ]
        },
        {
          AND: [
            {
              name: {
                contains: q,
                mode: 'insensitive',
              },
            },
            {
              id: {
                not: currentUser.id,
              },
            },
          ]
        },
      ]
    },
    select: {
      id: true,
      name: true,
      image: true,
      approachedBy: {
        where: {
          approachingId: currentUser.id,
        }
      },
      approached: {
        where: {
          approachedId: currentUser.id,
        }
      }
    },
  })

  const handleOnSearch = async (formData: FormData) => {
    'use server'
    redirect(`/dashboard/users?q=${formData.get('q')}`)
  }

  const handleOnFriendRemove = (friend: Friend) =>
    async (_formData: FormData) => {
      'use server'

      await prisma.friend.delete({
        where: {
          id: friend.id,
        }
      })

      revalidatePath('/dashboard/friends')
      revalidatePath('/dashboard/users')
    }

  const handleOnFriendAdd = (approached: Pick<User, 'id'>) =>
    async (_formData: FormData) => {
      'use server'

      await prisma.friend.create({
        data: {
          approachedId: approached.id,
          approachingId: currentUser.id,
        }
      })

      revalidatePath('/dashboard/friends')
      revalidatePath('/dashboard/users')
    }

  return (
    <DashboardShell>
      <DashboardHeader heading="Users" text="Find users who should be your friends.">
        <Link
          href="/dashboard/friends"
          className={cn(buttonVariants({}))}
        >
          See friends
        </Link>
      </DashboardHeader>
      <form
        action={handleOnSearch}
        className="flex justify-center"
      >
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Who are we looking for?"
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
      {!!users.length
        ? (
          <div className="flex flex-col gap-4">
            {users.map(user => {
              const Icon = Icons['user']
              const friend = user.approachedBy.find(({ approachingId }) => approachingId === currentUser.id)
                || user.approached.find(({ approachedId }) => approachedId === currentUser.id)

              return (
                <form
                  key={user.id}
                  {...(friend?.isAccepted
                    ? {}
                    : friend
                      ? { action: handleOnFriendRemove(friend) }
                      : { action: handleOnFriendAdd(user) })
                  }
                  className="flex items-center"
                >
                  <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
                    <UserAvatar user={user} />
                  </span>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.id}</p>
                  </div>
                  {friend?.isAccepted
                    ? (
                      <Icon className="ml-auto size-4" />
                    )
                    : !!friend
                      ? (
                        <Button className={cn("ml-auto", buttonVariants({ variant: 'destructive' }))}>
                          Cancel invitiation
                        </Button>
                      )
                      : (
                        <Button className="ml-auto">
                          Add friend
                        </Button>
                      )}
                </form>
              )
            })}
          </div>
        )
        : (
          <div>
            <EmptyPlaceholder>
              <EmptyPlaceholder.Icon name="user" />
              <EmptyPlaceholder.Title>No users found</EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description>
                We didn&apos;t find any users. Try searching different username.
              </EmptyPlaceholder.Description>
            </EmptyPlaceholder>
          </div>
        )}
    </DashboardShell>
  )
}

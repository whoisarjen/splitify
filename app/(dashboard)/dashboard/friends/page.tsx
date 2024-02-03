import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Button, buttonVariants } from "@/components/ui/button"
import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/db"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { type Friend } from "@prisma/client"
import { UserAvatar } from "@/components/shared/user-avatar"
import { getFriendData, getFriends } from "@/app/utils/friends.utils"

export const metadata = {
  title: "Dashboard",
}

export default async function FriendsPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const {
    pendingFriends,
    friends,
  } = await getFriends(currentUser)

  const handleOnAcceptInviation = (approachingPendingFriend: Friend) => async () => {
    'use server'

    await prisma.friend.update({
      data: {
        isAccepted: true,
      },
      where: {
        id: approachingPendingFriend.id,
      }
    })

    revalidatePath('/dashboard/users')
    revalidatePath('/dashboard/friends')
  }

  const handleOnDeclineInviation = (approachingPendingFriend: Friend) => async () => {
    'use server'

    await prisma.friend.delete({
      where: {
        id: approachingPendingFriend.id,
      }
    })

    revalidatePath('/dashboard/users')
    revalidatePath('/dashboard/friends')
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Friends" text="Create and manage friends.">
        <Link
          href="/dashboard/users"
          className={cn(buttonVariants({}))}
        >
          Add friends
        </Link>
      </DashboardHeader>
      {!!pendingFriends.length &&
        <div className="flex flex-col gap-4">
          {pendingFriends.map(pendingFriend => {
            const user = getFriendData(currentUser)(pendingFriend)

            return (
              <div
                key={user.id}
                className="flex items-center"
              >
                <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
                  <UserAvatar user={user} />
                </span>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.id}</p>
                </div>
                <div className="ml-auto flex gap-2">
                  <form action={handleOnAcceptInviation(pendingFriend)}>
                    <Button>
                      Accept
                    </Button>
                  </form>
                  <form action={handleOnDeclineInviation(pendingFriend)}>
                    <Button className={cn(buttonVariants({ variant: 'destructive' }))}>
                      Decline
                    </Button>
                  </form>
                </div>
              </div>
            )
          })}
        </div>
      }
      {!!friends.length
        ? (
          <div className="flex flex-col gap-4">
            {friends.map(friend => {
              const user = getFriendData(currentUser)(friend)

              return (
                <div
                  key={user.id}
                  className="flex items-center"
                >
                  <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
                    <UserAvatar user={user} />
                  </span>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.id}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )
        : (
          <div>
            <EmptyPlaceholder>
              <EmptyPlaceholder.Icon name="user" />
              <EmptyPlaceholder.Title>No friends added</EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description>
                You don&apos;t have any friends yet. Start adding friends.
              </EmptyPlaceholder.Description>
              <Link
                href="/dashboard/users"
                className={cn(buttonVariants({ variant: 'outline' }))}
              >
                Add friends
              </Link>
            </EmptyPlaceholder>
          </div>
        )}
    </DashboardShell>
  )
}

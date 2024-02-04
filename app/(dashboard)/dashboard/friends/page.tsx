import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Button, buttonVariants } from "@/components/ui/button"
import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/db"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { type Friend } from "@prisma/client"
import { UserAvatar } from "@/components/shared/user-avatar"
import { getFriendData, getFriends } from "@/utils/friends.utils"
import { CustomEmptyPlaceholder } from "@/components/CustomEmptyPlaceholder/CustomEmptyPlaceholder"

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
      <DashboardHeader heading="Znajomi" text="Dodawaj i zarządzaj znajomymi.">
        <Link
          href="/dashboard/users"
          className={cn(buttonVariants({}))}
        >
          Dodaj
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
                      Zaakceptuj
                    </Button>
                  </form>
                  <form action={handleOnDeclineInviation(pendingFriend)}>
                    <Button className={cn(buttonVariants({ variant: 'destructive' }))}>
                      Odrzuć
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
          <CustomEmptyPlaceholder
            title="No friends added"
            description="You do not have any friends yet. Start adding friends."
            iconName="user"
            buttonText="Add friends"
            href="/dashboard/friends"
          />
        )}
    </DashboardShell>
  )
}

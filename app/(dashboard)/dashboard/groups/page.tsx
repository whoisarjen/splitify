import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { env } from "@/env.mjs"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { timeAgo } from "@/lib/utils"
import { Icons } from "@/components/shared/icons"
import Link from "next/link"

export const metadata = {
  title: "Dashboard",
}

const prefixes = ['Monkey', 'Starlight', 'Thunder', 'Galactic', 'Fire', 'Ice', 'Solar', 'Lunar', 'Mystic', 'Neon']
const suffixes = ['Gang', 'Squad', 'Crew', 'Tribe', 'Alliance', 'Pack', 'Team', 'Fleet', 'Clan', 'Horde']

const getRandomName = () => {
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
  return `${prefix} ${suffix}`
}

export default async function GroupsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const groups = await prisma.group.findMany({
    include: {
      users: true
    },
    where: {
      users: {
        some: {
          user: {
            id: user.id,
          }
        }
      },
      isActive: true,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  const handleOnAddGroup = async () => {
    'use server'

    const group = await prisma.group.create({
      data: {
        name: getRandomName(),
        users: {
          create: [
            {
              user: {
                connect: {
                  id: user.id,
                }
              }
            }
          ]
        }
      }
    })

    revalidatePath('/dashboard/groups')
    redirect(`/dashboard/groups/${group.id}`)
  }

  const isGroupLimit = groups.length >= env.LIMIT_OF_GROUPS

  return (
    <form action={handleOnAddGroup}>
      <DashboardShell>
        <DashboardHeader heading="Groups" text="Create and manage groups.">
          {/* TODO communicate why it's disabled */}
          <Button disabled={isGroupLimit}>Add group</Button>
        </DashboardHeader>
        {groups.length > 0
          ? (
            <div>
              {groups.map(group => {
                const Icon = Icons['users']

                return (
                  <Link key={group.id} href={`/dashboard/groups/${group.id}`}>
                    <Card>
                      <CardHeader className="gap-2">
                        <div className="flex h-5 w-1/5 items-center gap-2">
                          <div>
                            {group.users.filter(user => user.isActive).length}
                          </div>
                          <Icon className="size-4" />
                          <div>
                            {group.name}
                          </div>
                        </div>
                        <div className="size-4/5">
                          {group.description}
                        </div>
                      </CardHeader>
                      <CardContent className="h-10" />
                      <CardFooter>
                        <div className="h-8">
                          Created {timeAgo(group.createdAt)}
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )
          : (
            <div>
              <EmptyPlaceholder>
                <EmptyPlaceholder.Icon name="users" />
                <EmptyPlaceholder.Title>No groups created</EmptyPlaceholder.Title>
                <EmptyPlaceholder.Description>
                  You don&apost have any groups yet. Start creating groups.
                </EmptyPlaceholder.Description>
                <Button variant="outline">Add group</Button>
              </EmptyPlaceholder>
            </div>
          )}
      </DashboardShell>
    </form>
  )
}

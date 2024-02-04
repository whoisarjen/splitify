import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
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
import { CustomEmptyPlaceholder } from "@/components/CustomEmptyPlaceholder/CustomEmptyPlaceholder"

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
        <DashboardHeader heading="Grupy" text="Twórz i zarządzaj grupami.">
          {/* TODO communicate why it's disabled */}
          <Button disabled={isGroupLimit}>Dodaj</Button>
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
                          Stworzona {timeAgo(group.createdAt)}
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )
          : (
            <CustomEmptyPlaceholder
              title="Brak grup"
              description="Nie masz żadnych grup. Stwórz kilka."
              iconName="users"
              buttonText="Add group"
              href="/dashboard/groups"
            />
          )}
      </DashboardShell>
    </form>
  )
}

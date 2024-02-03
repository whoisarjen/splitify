import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { currentAsOptions } from "@/app/utils/global.utils"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export const metadata = {
  title: "Dashboard",
}

export default async function FriendsPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const handleOnAddExpense = async (formData: FormData) => {
    'use server'
    console.log({ formData })
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Expense" text="Create expense." />
      <form className="flex justify-center" action={handleOnAddExpense}>
        <div className="box-border flex max-w-96 flex-1 flex-col gap-4 p-6">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Crispy Baked Chicken Wings" />
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" type="number" placeholder={`00.00 ${currentAsOptions[0].code}`} />
          <Label htmlFor="currency">Currency</Label>
          <Select>
            <SelectTrigger id="currency">
                <SelectValue placeholder={currentAsOptions[0].code} />
            </SelectTrigger>
            <SelectContent>
                {currentAsOptions.map(option => (
                    <SelectItem key={option.code} value={option.code}>{option.code}</SelectItem>
                ))}
            </SelectContent>
          </Select>
            <Button className={cn(buttonVariants({}))}>
                Save
            </Button>
        </div>
      </form>
    </DashboardShell>
  )
}

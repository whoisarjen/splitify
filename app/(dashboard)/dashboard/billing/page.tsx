import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { getUserSubscriptionPlan } from "@/lib/subscription"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BillingInfo } from "@/components/billing-info"
import { DashboardHeader } from "@/components/dashboard/header"
import { Icons } from "@/components/shared/icons"
import { DashboardShell } from "@/components/dashboard/shell"

export const metadata = {
  title: "Płatności",
  description: "Zarządzaj płatnościami.",
}

export default async function BillingPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const subscriptionPlan = await getUserSubscriptionPlan(user.id)

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Płatności"
        text="Zarządzaj płatnościami."
      />
      <div className="grid gap-8">
        <Alert className="!pl-14">
          <Icons.warning />
          <AlertTitle>This is a demo app.</AlertTitle>
          <AlertDescription>
            SaaS Starter app is a demo app using a Stripe test environment. You can
            find a list of test card numbers on the{" "}
            <a
              href="https://stripe.com/docs/testing#cards"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-8"
            >
              Stripe docs
            </a>
            .
          </AlertDescription>
        </Alert>
        <BillingInfo
          subscriptionPlan={subscriptionPlan}
        />
      </div>
    </DashboardShell>
  )
}

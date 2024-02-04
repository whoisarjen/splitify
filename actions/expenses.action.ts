'use server'

import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { type CreateExpenseSchema } from "@/lib/validations/expense.schema"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const getUnsettledExpenses = async () => {
    const currentUser = await getCurrentUser()
  
    if (!currentUser) {
      redirect(authOptions?.pages?.signIn || "/login")
    }

    const expenseCounter = await prisma.expenseCounter.findMany({
        include: {
            userMinus: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            },
            userPlus: {
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
                    userPlusId: currentUser.id,
                    NOT: {
                        totalAmount: 0,
                    },
                },
                {
                    userMinusId: currentUser.id,
                    NOT: {
                        totalAmount: 0,
                    },
                },
            ]
        }
    })

    return expenseCounter
}

export const handleOnAddExpenseAction = async (data: CreateExpenseSchema) => {
    'use server'

    const currentExpenseCounter = await prisma.expenseCounter.findFirst({
        where: {
            OR: [
                {
                    code: data.code,
                    userMinusId: data.userId,
                    userPlusId: data.targetId,
                },
                {
                    code: data.code,
                    userPlusId: data.userId,
                    userMinusId: data.targetId,
                },
            ]
        }
    })

    const [expense, expenseCounter] = await prisma.$transaction([
        prisma.expense.create({
            data: {
                name: data.name,
                amount: data.amount,
                code: data.code,
                paidById: data.userId,
                oweById: data.targetId,
            }
        }),
        prisma.expenseCounter.upsert({
            where: {
                id: currentExpenseCounter?.id ?? '',
            },
            update: {
                totalAmount: {
                    increment: data.userId === currentExpenseCounter?.userPlusId
                        ? data.amount
                        : -data.amount
                },
            },
            create: {
                userPlusId: data.userId,
                userMinusId: data.targetId,
                totalAmount: data.amount,
                code: data.code,
            },
        }),
    ])

    revalidatePath('/dashboard')
    revalidatePath('/dashboard/activity')

    return {
        expense,
        expenseCounter,
    }
}
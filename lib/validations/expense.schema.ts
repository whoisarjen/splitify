import { currentAsOptions } from "@/app/utils/global.utils"
import * as z from "zod"

export const createExpenseSchema = z.object({
    name: z.string().min(3, {
        message: 'Nazwa musi mieć co najmniej 3 litery.',
    }).max(128, {
        message: 'Nazwa może mieć maksymalnie 128 liter.',
    }),
    amount: z.preprocess(
        value => parseFloat(z.string().parse(value)),
        z.number({
            invalid_type_error: "Podaj poprawną kwotę.",
        })),
    code: z.preprocess(
        value => currentAsOptions.find(option => option.code === value)?.code,
        z.string({
            invalid_type_error: "WYbierz poprawną walutę.",
        }),
    ),
    userId: z.string(),
    targetId: z.string(),
})

export type CreateExpenseSchema = z.infer<typeof createExpenseSchema>

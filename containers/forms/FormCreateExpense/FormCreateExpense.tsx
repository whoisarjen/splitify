'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { currentAsOptions } from "@/utils/global.utils"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { type CreateExpenseSchema, createExpenseSchema } from "@/lib/validations/expense.schema"
import { useForm, Controller } from "react-hook-form"
import { useState } from "react"
import { FormErrorToast } from "@/components/forms/FormErrorToast"
import { Icons } from "@/components/shared/icons"
import { handleOnAddExpenseAction } from "@/actions/expenses.action"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export const FormCreateExpense = ({
  userId,
  targetId,
}: Pick<CreateExpenseSchema, 'userId' | 'targetId'>) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const {
      control,
      register,
      getValues,
      handleSubmit,
      formState: { errors },
    } = useForm<CreateExpenseSchema>({
      resolver: zodResolver(createExpenseSchema),
      defaultValues: {
        code: currentAsOptions[0].code,
        userId,
        targetId,
      }
    })

    const onSubmit = async (data: CreateExpenseSchema) => {
      try {
        setIsLoading(true)
        await handleOnAddExpenseAction(data)
        toast({
          title: 'Wydatek zapisany.',
          description: 'Wydatek zostal zapisany poprawnie.',
        })
        router.push('/dashboard')
      } catch (error) {
        toast({
          title: 'Coś poszło nie tak.',
          description: (error as { message: string }).message,
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    return (
        <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
          <FormErrorToast errors={errors} />
          <div className="flex max-w-96 flex-1 flex-col gap-4">
            <Label htmlFor="name">Nazwa</Label>
            <Input
                id="name"
                type="text"
                placeholder="Crispy Baked Chicken Wings"
                disabled={isLoading}
                {...register('name')}
            />
            <Label htmlFor="amount">Wartość</Label>
            <Input
                id="amount"
                type="number"
                step="0.01"
                min="0"
                max="100000"
                placeholder={`21.37 ${getValues('code')}`}
                disabled={isLoading}
                {...register('amount')}
            />
            <Label htmlFor="code">Waluta</Label>
            <Controller
              control={control}
              name="code"
              render={({ field: { onChange, value } }) => (
                <Select onValueChange={onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder={value} />
                  </SelectTrigger>
                  <SelectContent>
                      {currentAsOptions.map(option => (
                          <SelectItem key={option.code} value={option.code}>{option.code}</SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              )}
            />
            <Button className={cn(buttonVariants({}))} disabled={isLoading}>
              {isLoading
                ? (
                  <Icons.spinner className="mr-2 size-4 animate-spin" />
                )
              : (
                'Dodaj'
              )}
            </Button>
          </div>
        </form>
    )
}

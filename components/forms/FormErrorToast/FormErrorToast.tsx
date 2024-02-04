'use client'

import { toast } from "@/components/ui/use-toast"
import { useEffect } from "react"
import { type FieldErrors } from "react-hook-form"

type FormErrorToastProps = {
    errors: FieldErrors
}

export const FormErrorToast = ({
    errors,
}: FormErrorToastProps) => {
    useEffect(() => {
      if (Object.keys(errors).length) {
        for (const [_key, value] of Object.entries(errors)) {
          value
          toast({
            title: 'Coś poszło nie tak.',
            description: (value as { message: string }).message,
            variant: "destructive",
          })
        }
      }
    }, [errors])

    return null
}

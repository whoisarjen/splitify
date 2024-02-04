import { cn } from "@/lib/utils"
import { EmptyPlaceholder } from "../shared/empty-placeholder"
import { buttonVariants } from "../ui/button"
import { Icons } from "@/components/shared/icons"
import Link from "next/link"

type CustomEmptyPlaceholderProps = {
    title: string
    description: string
    iconName: keyof typeof Icons
    buttonText: string
    href: string
}

export const CustomEmptyPlaceholder = ({
    title,
    description,
    iconName,
    buttonText,
    href,
}: CustomEmptyPlaceholderProps) => {
    return (
        <div>
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name={iconName} />
            <EmptyPlaceholder.Title>{title}</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              {description}
            </EmptyPlaceholder.Description>
            <Link
                href={href}
                className={cn(buttonVariants({ variant: 'outline' }))}
            >
                {buttonText}
            </Link>
          </EmptyPlaceholder>
        </div>
    )
}
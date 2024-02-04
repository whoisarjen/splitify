import { Icons } from "@/components/shared/icons"
import { dashboardConfig } from "@/config/dashboard"
import Link from "next/link"

export const FooterMenuMobile = () => {
    return (
        <div className="md:hidden">
            <div className="h-16 flex" />
            <div className="h-16 z-40 mt-0 bt-0 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all border-t fixed bottom-0 left-0 right-0 justify-evenly">
                {dashboardConfig.footerNav.filter(({ disabled }) => !disabled).slice(0, 5).map((item, index) => {
                    const Icon = Icons[item.icon || "arrowRight"]

                    return (
                        item.href && (
                            <Link
                                key={index}
                                href={item.disabled ? "/" : item.href}
                                className="flex-1 flex justify-center items-center flex-col h-16"
                            >
                                <Icon className="size-4" />
                                <span className="text-xs">{item.title}</span>
                            </Link>
                        )
                    )
                })}
            </div>
        </div>
    )
}

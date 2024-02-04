'use server'

import { revalidatePath } from "next/cache"

export const revalidatePathname = async (pathname: string) => {
    revalidatePath(pathname)
}

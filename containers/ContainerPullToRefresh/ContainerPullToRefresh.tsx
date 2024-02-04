'use client'

import { revalidatePathname } from '@/actions/global.action'
import { usePathname } from 'next/navigation'
import ReactPullToRefresh from 'react-pull-to-refresh'

type ContainerPullToRefreshProps = {
    children: React.ReactNode
}

export const ContainerPullToRefresh = ({
    children,
}: ContainerPullToRefreshProps) => {
    const pathname = usePathname()

    const handleRefresh = async () => {
        await revalidatePathname(pathname)
    }

    return (
        <ReactPullToRefresh onRefresh={handleRefresh}> 
            {children}
        </ReactPullToRefresh>
    )
}

'use client'

import { revalidatePathname } from '@/actions/global.action'
import { usePathname } from 'next/navigation'
import PullToRefresh from 'react-simple-pull-to-refresh';

type ContainerPullToRefreshProps = {
    children: React.ReactNode
}

export const ContainerPullToRefresh = ({
    children,
}: ContainerPullToRefreshProps) => {
    const pathname = usePathname()

    const handleRefresh = async () => {
        await revalidatePathname(pathname)
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    return (
        <PullToRefresh onRefresh={handleRefresh}>
            <>
                {children}
            </>
        </PullToRefresh>
    )
}

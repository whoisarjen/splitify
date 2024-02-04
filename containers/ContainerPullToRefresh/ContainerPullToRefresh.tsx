'use client'

import { useRouter } from 'next/navigation'
import ReactPullToRefresh from 'react-pull-to-refresh'

type ContainerPullToRefreshProps = {
    children: React.ReactNode
}

export const ContainerPullToRefresh = ({
    children,
}: ContainerPullToRefreshProps) => {
    const router = useRouter();

    const handleRefresh = async () => {
        router.refresh();
    }

    return (
        <ReactPullToRefresh onRefresh={handleRefresh}> 
            {children}
        </ReactPullToRefresh>
    )
}

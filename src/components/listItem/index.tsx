import { LinkStylized } from '@/styles/components/listItem';
import Link from 'next/link';
import React from 'react'

interface TopicsProps {
    id: number,
    title: string
}

const ListItem = ({ id, title, ...rest }: TopicsProps) => {
    return (
        <LinkStylized>
            <Link href={`/${id}`} {...rest}>
                {title}
            </Link>
        </LinkStylized>
    )
}

export default ListItem

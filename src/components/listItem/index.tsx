import { LinkStylized } from '@/styles/components/listItem';
import Link from 'next/link';
import React from 'react'

interface DocumentsProps {
    id: number,
    title: string
}

const ListItem: React.FC<DocumentsProps> = ({ id, title, ...rest }) => {
    return (
        <LinkStylized>
            <Link href={`/${id}`} {...rest}>
                {title}
            </Link>
        </LinkStylized>
    )
}

export default ListItem

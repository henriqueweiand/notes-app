import React, { HTMLAttributes } from "react";
import Link from "next/link";

import { Container } from '@/styles/components/sidebar';
import { useDocuments } from "@/hooks/Document";
import ListItem from "@/components/listItem";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'small' | 'large'
}

const Sidebar: React.FC<SidebarProps> = ({ size = 'small', ...rest }) => {
    const { documents } = useDocuments();

    return (
        <Container {...rest} size={size}>
            <div>
                {documents.map(document => <ListItem {...document} key={document.id} />)}
            </div>

            <Link href={"/document/create"}>
                <button>create</button>
            </Link>
        </Container>
    )
}

export default Sidebar

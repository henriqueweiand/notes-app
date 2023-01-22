import React, { HTMLAttributes } from "react";

import { Container, Main } from "@/styles/components/layout"
import Sidebar from "@/components/sidebar";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, ...rest }) => {

  return (
    <Container role="container" {...rest}>
      <Sidebar role="aside" size="small" />

      <Main role="main">
        {children}
      </Main>
    </Container>
  )
}

export default Layout;
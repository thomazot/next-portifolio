import React from 'react'
import Sliders from 'common/Sliders'
import * as CSS from './Layout.style'
import Header from 'common/Header/Header'
import Menu from 'common/Menu'

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[]
  header?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, header = false }) => {
  return (
    <CSS.Container>
      {header && <Header />}
      <Menu />
      <main>
        {Array.isArray(children) ? <Sliders>{children}</Sliders> : children}
      </main>
    </CSS.Container>
  )
}

export default Layout

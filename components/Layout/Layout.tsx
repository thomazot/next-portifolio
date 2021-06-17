import React from 'react'
import Sliders from '../Sliders'
import * as CSS from './Layout.style'
import Header from '../Header/Header'

interface LayoutProps {
  header?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, header = false }) => {
  return (
    <CSS.Container>
      {header && <Header />}
      <main>
        {!Array.isArray(children) && children}
        {Array.isArray(children) && <Sliders>{children}</Sliders>}
      </main>
    </CSS.Container>
  )
}

export default Layout

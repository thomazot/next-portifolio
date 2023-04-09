import React from 'react'
import Header from 'components/Header/Header'
import Menu from 'components/Menu'

import Views from 'common/Views/Views'

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[]
  header?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, header = false }) => {
  return (
    <>
      {header && <Header />}
      <Menu />
      <main>
        <Views direction="column" gap={3}>
          {children}
        </Views>
      </main>
    </>
  )
}

export default Layout

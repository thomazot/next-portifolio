import React from 'react'
import Header from 'components/Header/Header'
import Menu, { MenuItemType } from 'components/Menu'

import Views from 'common/Views/Views'

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[]
  header?: boolean
  menu: MenuItemType[]
}

const Layout: React.FC<LayoutProps> = ({ children, header = false, menu }) => {
  return (
    <>
      {header && <Header />}
      <Menu items={menu} />
      <main>
        <Views direction="column" gap={3}>
          {children}
        </Views>
      </main>
    </>
  )
}

export default Layout

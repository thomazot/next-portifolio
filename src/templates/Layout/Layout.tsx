import React from 'react'
import Sliders from 'common/Sliders'
import Header from 'common/Header/Header'
import Menu, { MenuItemType } from 'common/Menu'

import * as S from './Layout.style'

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[]
  header?: boolean
  menu: MenuItemType[]
}

const Layout: React.FC<LayoutProps> = ({ children, header = false, menu }) => {
  return (
    <S.ContainerLayout>
      {header && <Header />}
      <Menu items={menu} />
      <main>
        {Array.isArray(children) ? <Sliders>{children}</Sliders> : children}
      </main>
    </S.ContainerLayout>
  )
}

export default Layout

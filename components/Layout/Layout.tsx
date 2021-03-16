import React from 'react'
import * as CSS from './Layout.style'

const Layout: React.FC = ({ children }) => {
  return (
    <CSS.Container>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </CSS.Container>
  )
}

export default Layout

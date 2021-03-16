import React from 'react'
import Sliders from '../Sliders'
import * as CSS from './Layout.style'

const Layout: React.FC = ({ children }) => {
  return (
    <CSS.Container>
      <header></header>
      <main>
        {!Array.isArray(children) && children}
        {Array.isArray(children) && <Sliders>{children}</Sliders>}
      </main>
      <footer></footer>
    </CSS.Container>
  )
}

export default Layout

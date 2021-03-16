import React from 'react'
import Sliders from '../Sliders'
import * as CSS from './Layout.style'

const Layout: React.FC = ({ children }) => {
  return (
    <CSS.Container>
      <main>
        {!Array.isArray(children) && children}
        {Array.isArray(children) && <Sliders>{children}</Sliders>}
      </main>
    </CSS.Container>
  )
}

export default Layout

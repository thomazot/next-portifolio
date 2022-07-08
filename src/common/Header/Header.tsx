import Logo from 'common/Logo'
import React from 'react'
import * as CSS from './Header.style'

const Header = () => {
  return (
    <CSS.Header>
      <div className="container">
        <Logo width="300" height="74" />
      </div>
    </CSS.Header>
  )
}

export default Header

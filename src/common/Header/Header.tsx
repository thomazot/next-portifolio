import Logo from 'common/Logo'
import React from 'react'

import Views from 'common/Views/Views'
import * as S from './Header.style'
import Container from 'common/Container/Container'

type HeaderProps = {
  children?: React.ReactNode | React.ReactNode[]
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <S.Header>
      <Container>
        <Views alignItems="center" justifyContent="space-between">
          <Logo size={'R'} link="/" />
          {children && children}
        </Views>
      </Container>
    </S.Header>
  )
}

export default Header

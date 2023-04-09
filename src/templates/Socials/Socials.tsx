import React from 'react'

import Container from 'common/Container/Container'
import Title from 'common/Title/Title'
import Views from 'common/Views/Views'
import SocialsComponent from 'components/Socials'
import { SizeType } from 'styles/theme'

const Socials: React.FC = () => {
  return (
    <Container center>
      <Views direction="column" center gap={1}>
        <Title size={SizeType.EXTRA_SMALL}>Socials</Title>
        <Views>
          <SocialsComponent />
        </Views>
      </Views>
    </Container>
  )
}

export default Socials

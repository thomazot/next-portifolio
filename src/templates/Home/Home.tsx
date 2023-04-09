import Container from 'common/Container'
import Button from 'forms/Button'
import Text from 'common/Text'
import Title from 'common/Title'
import Views from 'common/Views'
import React from 'react'
import { SizeType } from 'styles/theme'

const Home: React.FC = () => {
  return (
    <Container>
      <Views>
        <Views direction="column" gap={1}>
          <Title size={SizeType.LARGE}>Hi, my name is</Title>
          <Title as="h2">Thomaz T. O. Toyama</Title>
          <Text>
            {`I'm a Front-End developer with more than 14 years of
            development as a developer today focused on development with React,
            NextJS. `}
          </Text>
          <Button themeType="secondary" inline>
            Contact me.
          </Button>
        </Views>
      </Views>
    </Container>
  )
}

export default Home

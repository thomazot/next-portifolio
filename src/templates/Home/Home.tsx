import Logo from 'common/Logo'
import TextAnimate from 'common/TextAnimate'
import React from 'react'

import * as CSS from './Home.style'

const Home: React.FC = () => {
  return (
    <CSS.Container>
      <CSS.Content>
        <CSS.Title>
          <span>
            {`Hello, I'm a Front-End developer with more than 14 years of
            development as a developer today focused on development with React,
            NextJS.`}
          </span>
          <Logo
            title="Hello, I'm a Front-End developer with more than 14 years of development as a developer today focused on development with React, NextJS."
            height="74"
          />
        </CSS.Title>
      </CSS.Content>

      <TextAnimate />
    </CSS.Container>
  )
}

export default Home

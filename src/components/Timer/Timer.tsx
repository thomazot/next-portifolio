import React from 'react'
import styled from 'styled-components'
import Hours from 'components/Hours'
import Minutes from 'components/Minutes'
import Seconds from 'components/Seconds'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
`

const Pipe = styled.span`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 20px;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
  }
`

const Timer = () => {
  return (
    <Container>
      <Hours />
      <Pipe />
      <Minutes />
      <Pipe />
      <Seconds />
    </Container>
  )
}

export default Timer

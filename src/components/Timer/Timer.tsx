import React from 'react'
import styled from 'styled-components'
import TimerHours from 'components/TimerClock'

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
      <TimerHours type="hours" />
      <Pipe />
      <TimerHours type="minutes" />
      <Pipe />
      <TimerHours type="seconds" />
    </Container>
  )
}

export default Timer

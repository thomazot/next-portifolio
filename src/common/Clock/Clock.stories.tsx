import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import { useEffect, useState } from 'react'
import Clock from '.'

export default {
  title: 'Commons/Clock',
  component: Clock
} as Meta

export const Default: Story = () => {
  const [clock, setClock] = useState(0)
  const [shuffle, setShuffle] = useState(true)

  useEffect(() => {
    const TimerID = setInterval(() => {
      const timer = new Date()
      const seconds = timer.getSeconds()
      setClock((previousClock) => {
        if (previousClock !== seconds) {
          setShuffle((previous) => !previous)
          return seconds
        }

        return previousClock
      })
    }, 600)

    return () => clearInterval(TimerID)
  }, [])

  return (
    <Container
      style={{
        background: '#333',
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Clock shuffle={shuffle} clock={clock} />
    </Container>
  )
}

import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import { useEffect, useState } from 'react'
import Clock from '.'
import Views from 'common/Views/Views'

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
    <Container center fullscreen>
      <Views center>
        <Clock shuffle={shuffle} clock={clock} />
      </Views>
    </Container>
  )
}

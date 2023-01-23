import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import TimerClock from '.'
import { TimerClockProps } from './TimerClock'

export default {
  title: 'Components/TimerClock',
  component: TimerClock,
  args: {
    type: 'seconds'
  }
} as Meta<TimerClockProps>

export const Default: Story<TimerClockProps> = (props) => (
  <Container
    style={{
      background: '#333',
      minHeight: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <TimerClock {...props} />
  </Container>
)

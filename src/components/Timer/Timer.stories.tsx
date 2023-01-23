import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import Timer from '.'

export default {
  title: 'Components/Timer',
  component: Timer
} as Meta

export const Default: Story = () => (
  <Container
    style={{
      background: '#333',
      minHeight: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Timer />
  </Container>
)

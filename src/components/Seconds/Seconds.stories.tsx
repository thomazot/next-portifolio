import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import Seconds from '.'

export default {
  title: 'Components/Seconds',
  component: Seconds
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
    <Seconds />
  </Container>
)

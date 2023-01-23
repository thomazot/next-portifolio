import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import Minutes from '.'

export default {
  title: 'Components/Minutes',
  component: Minutes
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
    <Minutes />
  </Container>
)

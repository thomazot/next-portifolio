import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import Hours from '.'

export default {
  title: 'Components/Hours',
  component: Hours
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
    <Hours />
  </Container>
)

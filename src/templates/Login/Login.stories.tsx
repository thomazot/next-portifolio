import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import Login from '.'

export default {
  title: 'Templates/Login',
  component: Login
} as Meta

export const Default: Story = () => (
  <Container>
    <div
      style={{
        display: 'flex',
        height: '100vh',
        maxHeight: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Login />
    </div>
  </Container>
)

import { Story, Meta } from '@storybook/react'
import Container from '.'

export default {
  title: 'Commons/Container',
  component: Container
} as Meta

export const Default: Story = () => (
  <Container center fullscreen>
    Container
  </Container>
)

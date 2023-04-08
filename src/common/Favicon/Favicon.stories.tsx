import { Story, Meta } from '@storybook/react'
import Favicon from '.'
import Container from 'common/Container'

export default {
  title: 'Commons/Favicon',
  component: Favicon
} as Meta

export const Default: Story = () => (
  <Container center fullscreen>
    <Favicon />
  </Container>
)

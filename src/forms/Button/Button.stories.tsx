import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import Button, { ButtonProps } from '.'
import Views from 'common/Views/Views'

export default {
  title: 'Forms/Button',
  component: Button,
  args: {
    inline: true
  }
} as Meta<ButtonProps>

export const Default: Story<ButtonProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Button {...args}>Button Primary</Button>
    </Views>
  </Container>
)

export const Loading: Story<ButtonProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Button {...args}>Button Primary 1</Button>
    </Views>
  </Container>
)
Loading.args = {
  loading: true
}

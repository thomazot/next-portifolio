import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import Button, { ButtonProps } from '.'
import Views from 'common/Views/Views'
import { FaApple } from 'react-icons/fa'

export default {
  title: 'Forms/Button',
  component: Button
} as Meta<ButtonProps>

export const Default: Story<ButtonProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Button {...args}>Button Primary</Button>
    </Views>
  </Container>
)

export const Secondary: Story<ButtonProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Button {...args}>Button Secondary</Button>
    </Views>
  </Container>
)

Secondary.args = {
  themeType: 'secondary'
}

export const Transparent: Story<ButtonProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Button {...args}>Button Transparent</Button>
    </Views>
  </Container>
)

Transparent.args = {
  themeType: 'transparent'
}

export const Inline: Story<ButtonProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Button {...args}>Button Primary</Button>
    </Views>
  </Container>
)

Inline.args = {
  inline: true
}

export const Loading: Story<ButtonProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Button {...args}>Button Loading</Button>
    </Views>
  </Container>
)
Loading.args = {
  loading: true
}

export const Icon: Story<ButtonProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Button {...args}>Button Icon</Button>
    </Views>
  </Container>
)
Icon.args = {
  icon: <FaApple />
}

export const IconTransparent: Story<ButtonProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Button {...args} />
    </Views>
  </Container>
)
IconTransparent.args = {
  icon: <FaApple />,
  themeType: 'transparent'
}

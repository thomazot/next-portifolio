import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import Logo from '.'
import { LogoProps } from './Logo'

export default {
  title: 'Commons/Logo',
  component: Logo,
  argTypes: {
    size: {
      control: {
        type: 'select'
      }
    },
    link: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<LogoProps>

export const Default: Story = (args) => (
  <Container center fullscreen>
    <Logo {...args} />
  </Container>
)

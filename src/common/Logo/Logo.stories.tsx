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
      <Logo {...args} />
    </div>
  </Container>
)

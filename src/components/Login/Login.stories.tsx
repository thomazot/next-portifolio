import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import Login, { LoginProps } from '.'
import Views from 'common/Views'

export default {
  title: 'Components/Login',
  component: Login,
  args: {
    loading: false,
    onSubmit: () => Promise.resolve(undefined)
  }
} as Meta<LoginProps>

export const Default: Story<LoginProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Login {...args} />
    </Views>
  </Container>
)

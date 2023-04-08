import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import Checkbox, { CheckboxProps } from '.'
import Views from 'common/Views/Views'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  args: {
    id: 'user',
    label: 'Usuário'
  }
} as Meta<CheckboxProps>

export const Default: Story<CheckboxProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Checkbox {...args} />
    </Views>
  </Container>
)

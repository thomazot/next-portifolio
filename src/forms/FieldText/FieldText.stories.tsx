import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import FieldText, { FieldTextProps } from './FieldText'
import Views from 'common/Views/Views'
import { BiSearch } from 'react-icons/bi'
import { FieldError } from 'react-hook-form'

export default {
  title: 'Forms/FieldText',
  component: FieldText,
  args: {
    label: 'Usuário'
  }
} as Meta<FieldTextProps>

export const Default: Story<FieldTextProps> = (args) => (
  <Container fullscreen center>
    <Views>
      <FieldText {...args} />
    </Views>
  </Container>
)

export const Disabled: Story<FieldTextProps> = (args) => (
  <Container fullscreen center>
    <Views>
      <FieldText {...args} />
    </Views>
  </Container>
)

Disabled.args = {
  disabled: true
}

export const Error: Story<FieldTextProps> = (args) => (
  <Container fullscreen center>
    <Views>
      <FieldText {...args} />
    </Views>
  </Container>
)

Error.args = {
  error: {
    message: 'Error message'
  } as FieldError
}

export const Icon: Story<FieldTextProps> = (args) => (
  <Container fullscreen center>
    <Views>
      <FieldText {...args} />
    </Views>
  </Container>
)

Icon.args = {
  label: undefined,
  icon: <BiSearch />
}

export const IconLeft: Story<FieldTextProps> = (args) => (
  <Container fullscreen center>
    <Views>
      <FieldText {...args} />
    </Views>
  </Container>
)

IconLeft.args = {
  label: undefined,
  iconPosition: 'left',
  icon: <BiSearch />
}

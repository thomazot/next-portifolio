import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import FieldText from '.'
import { FieldTextProps } from './FieldText'

export default {
  title: 'Commons/Form/FieldText',
  component: FieldText,
  args: {
    label: 'Usuário'
  }
} as Meta<FieldTextProps>

export const Default: Story<FieldTextProps> = (args) => (
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
      <FieldText {...args} />
    </div>
  </Container>
)

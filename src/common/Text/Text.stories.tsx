import { Story, Meta } from '@storybook/react'
import Text, { TextProps } from './Text'

import Container from 'common/Container'
import Views from 'common/Views'
import { SizeType } from 'styles/theme'

export default {
  title: 'Commons/Text',
  component: Text,
  argTypes: {
    size: {
      defaultValue: 'large'
    },
    theme: {
      if: { exists: false, global: '', truthy: false }
    },
    ref: {
      if: { exists: false, global: '', truthy: false }
    },
    as: {
      if: { exists: false, global: '', truthy: false }
    },
    forwardedAs: {
      if: { exists: false, global: '', truthy: false }
    }
  }
} as Meta

export const Default: Story<TextProps> = (args) => (
  <Container>
    <Views center>
      <Text {...args}>Text example</Text>
    </Views>
  </Container>
)

export const Large: Story<TextProps> = (args) => (
  <Container>
    <Views center>
      <Text {...args}>Text example</Text>
    </Views>
  </Container>
)

Large.args = {
  size: SizeType.LARGE
}

export const Medium: Story<TextProps> = (args) => (
  <Container>
    <Views center>
      <Text {...args}>Text example</Text>
    </Views>
  </Container>
)

Medium.args = {
  size: SizeType.MEDIUM
}

export const Small: Story<TextProps> = (args) => (
  <Container>
    <Views center>
      <Text {...args}>Text example</Text>
    </Views>
  </Container>
)

Small.args = {
  size: SizeType.SMALL
}

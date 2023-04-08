import { Story, Meta } from '@storybook/react'
import Title, { TitleProps } from './Title'

import Container from 'common/Container'
import Views from 'common/Views'
import { SizeType } from 'styles/theme'

export default {
  title: 'Commons/Title',
  component: Title,
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

export const Default: Story<TitleProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Title {...args}>Title example</Title>
    </Views>
  </Container>
)

export const Large: Story<TitleProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Title {...args}>Title example</Title>
    </Views>
  </Container>
)

Large.args = {
  size: SizeType.LARGE
}

export const Medium: Story<TitleProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Title {...args}>Title example</Title>
    </Views>
  </Container>
)

Medium.args = {
  size: SizeType.MEDIUM
}

export const Small: Story<TitleProps> = (args) => (
  <Container center fullscreen>
    <Views center>
      <Title {...args}>Title example</Title>
    </Views>
  </Container>
)

Small.args = {
  size: SizeType.SMALL
}

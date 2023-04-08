import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import Menu from '.'
import { MenuMock } from './Menu.mock'

export default {
  title: 'Commons/Menu',
  component: Menu
} as Meta

export const Default: Story = () => (
  <Container center fullscreen>
    <Menu items={MenuMock} />
  </Container>
)

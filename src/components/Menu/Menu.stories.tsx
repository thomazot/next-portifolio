import { Story, Meta } from '@storybook/react'
import Views from 'common/Views'
import Menu from '.'
import { MenuMock } from './Menu.mock'

export default {
  title: 'Components/Menu',
  component: Menu
} as Meta

export const Default: Story = () => (
  <Views>
    <Menu items={MenuMock} />
  </Views>
)

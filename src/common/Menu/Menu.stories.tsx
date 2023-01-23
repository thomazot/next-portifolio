import { Story, Meta } from '@storybook/react'
import Container from 'common/Container'
import Menu from '.'
import { MenuMock } from './Menu.mock'

export default {
  title: 'Commons/Menu',
  component: Menu
} as Meta

export const Default: Story = () => (
  <Container style={{ background: '#333', minHeight: '100%' }}>
    <Menu items={MenuMock} />
  </Container>
)

import { Story, Meta } from '@storybook/react'
import Home from 'templates/Home'
import Pinneds from 'templates/Pinneds'
import { PinnedsMock } from 'templates/Pinneds/Pinneds.mock'
import Socials from 'templates/Socials'
import Layout from '.'
import { MenuMock } from 'common/Menu/Menu.mock'

export default {
  title: 'Templates/Layout',
  component: Layout
} as Meta

export const Default: Story = () => (
  <Layout menu={MenuMock}>
    <Home />
    <Pinneds repositories={PinnedsMock} />
    <Socials />
  </Layout>
)

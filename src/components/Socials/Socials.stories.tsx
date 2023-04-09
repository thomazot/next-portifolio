import { Story, Meta } from '@storybook/react'
import Socials from '.'
import { QuerySocialMock } from './Socials.mock'

export default {
  title: 'Components/Socials',
  component: Socials
} as Meta

export const Default: Story = () => <Socials />

Default.parameters = {
  apolloClient: {
    mocks: QuerySocialMock
  }
}

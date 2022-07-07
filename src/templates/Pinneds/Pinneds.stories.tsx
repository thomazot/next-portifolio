import { Story, Meta } from '@storybook/react'
import IPinneds from '../../@types/IPinneds'
import Pinneds from '.'

export default {
  title: 'Templates/Pinneds',
  component: Pinneds,
  args: {
    repositories: [
      {
        name: '',
        description: '',
        descriptionHTML: '',
        shortDescriptionHTML: '',
        homepageUrl: '',
        url: '',
        object: {
          text: ''
        }
      }
    ]
  }
} as Meta

export const Default: Story<IPinneds> = (args) => <Pinneds {...args} />
Default.args = {
  repositories: [
    {
      name: 'repository-name',
      description: 'description',
      descriptionHTML: 'description-html',
      shortDescriptionHTML: 'short-description-html',
      homepageUrl: 'homepage-url',
      url: 'url',
      object: {
        text: 'text'
      }
    }
  ]
}

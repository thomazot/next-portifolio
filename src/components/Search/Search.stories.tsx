import { Story, Meta } from '@storybook/react'
import Search from '.'
import Container from 'common/Container/Container'
import Views from 'common/Views/Views'

export default {
  title: 'Components/Search',
  component: Search
} as Meta

export const Default: Story = () => {
  function handleSubmit(term: string) {
    console.log('OnSubmit:', term)
  }
  return (
    <Container center fullscreen>
      <Views>
        <Search onSubmit={handleSubmit} />
      </Views>
    </Container>
  )
}

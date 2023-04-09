import { render } from 'utils/test-utils'

import Search from '.'

describe('<Search />', () => {
  it('should render component', () => {
    const { container } = render(<Search />)

    expect(container).toBeInTheDocument()
  })
})

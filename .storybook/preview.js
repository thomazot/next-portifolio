import { MockedProvider } from '@apollo/client/testing'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { GlobalProvider } from "contexts/GlobalContext"

import GlobalStyles from 'styles/global'

export const parameters = {
  layout: "fullscreen",
  apolloClient: {
    MockedProvider
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <GlobalProvider>
      <GlobalStyles />
      <Story />
    </GlobalProvider>
  )
]
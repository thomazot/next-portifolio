import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'hooks/useApollo'

import GlobalStyle from 'styles/global'
import theme from 'styles/theme'
import { GlobalProvider } from 'contexts/GlobalContext'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalProvider initial={pageProps.initialGlobal || null}>
            <GlobalStyle />
            <Component {...pageProps} />
          </GlobalProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp

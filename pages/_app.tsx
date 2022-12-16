import React, { useEffect, useMemo } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'hooks/useApollo'

import GlobalStyle from 'styles/global'
import theme from 'styles/theme'
import { GlobalProvider, IDataLayer } from 'contexts/GlobalContext'
import { useRouter } from 'next/router'
import gtmVirtualPageView from 'helpers/gtmVirtualPageView'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const router = useRouter()
  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL
  const dataLayer: IDataLayer = useMemo(
    () => ({
      pageTypeName: pageProps?.initialDataLayer?.pageTypeName || '',
      url: `${baseURL}${router.pathname}`
    }),
    [router, pageProps]
  )

  useEffect(() => {
    gtmVirtualPageView(dataLayer)
  }, [dataLayer])

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalProvider
            initialMetaTags={pageProps.initialMetaTags || null}
            initialDataLayer={dataLayer || null}
          >
            <GlobalStyle />
            <Component {...pageProps} />
          </GlobalProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp

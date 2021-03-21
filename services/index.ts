import { IncomingMessage, ServerResponse } from 'http'
import { useMemo } from 'react'
import { setContext } from '@apollo/client/link/context'
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
}

function createIsomorphLink(context: ResolverContext = {}) {
  // if (typeof window === 'undefined') {
  //   const { SchemaLink } = require('@apollo/client/link/schema')
  //   const { schema } = require('./schema')

  //   return new SchemaLink({ schema, context })
  // } else {
  const authLink = setContext((_, { headers }) => {
    const token = process.env.REACT_APP_TOKEN_GITHUB
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`
      }
    }
  })
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql'
  })
  return authLink.concat(httpLink)
  // }
}

function createApolloClient(context?: ResolverContext) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(context),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext
) {
  const _apolloClient = apolloClient ?? createApolloClient(context)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}

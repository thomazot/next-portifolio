import { IncomingMessage, ServerResponse } from 'http'
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

function createIsomorphLink() {
  const uri = process.env.REACT_APP_DATOCMS_URL
  const token = process.env.REACT_APP_DATOCMS_TOKEN

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`
      }
    }
  })
  const httpLink = createHttpLink({
    uri
  })
  return authLink.concat(httpLink)
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) _apolloClient.cache.restore(initialState)
  if (typeof window === 'undefined') return _apolloClient
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

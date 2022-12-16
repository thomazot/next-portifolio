import { gql } from '@apollo/client'

export const PAGE = gql`
  query page($page: String) {
    page(filter: { slug: { eq: $page } }) {
      title
      metatags {
        title
        description
      }
    }
  }
`

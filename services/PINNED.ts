import { gql } from '@apollo/client'

const PINNED = gql`
  query pinned {
    user(login: "thomazot") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
          }
        }
      }
    }
  }
`

export default PINNED

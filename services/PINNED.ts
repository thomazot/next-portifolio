import { gql } from '@apollo/client'

const PINNED = gql`
  query pinned {
    user(login: "thomazot") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            descriptionHTML
            shortDescriptionHTML
            homepageUrl
            url
            object(expression: "master:README.md") {
              ... on Blob {
                text
              }
            }
          }
        }
      }
    }
  }
`

export default PINNED

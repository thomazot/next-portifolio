import { gql } from '@apollo/client'

const REPOSITORY = gql`
  query repository($name: String!) {
    repositoryOwner(login: "thomazot") {
      repository(name: $name) {
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
`

export default REPOSITORY

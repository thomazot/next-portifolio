import { gql } from '@apollo/client'

export const REPOSITORY = gql`
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

export const REPOSITORY_PORTFOLIO = gql`
  query {
    search(
      type: REPOSITORY
      query: "user:thomazot topic:portifolio"
      first: 10
    ) {
      repos: edges {
        repo: node {
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

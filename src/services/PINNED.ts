import { gql } from '@apollo/client'

export const PINNED = gql`
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

export const PORTFOLIO = gql`
  query {
    search(
      type: REPOSITORY
      query: "user:thomazot topic:portifolio sort:updated-desc"
      first: 10
    ) {
      repos: edges {
        repo: node {
          ... on Repository {
            name
            description
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

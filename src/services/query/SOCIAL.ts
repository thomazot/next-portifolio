import { gql } from '@apollo/client'

export const SOCIAL = gql`
  {
    socials: allSocials(orderBy: id_ASC) {
      id
      name
      title
      link
      icon {
        url
      }
    }
  }
`

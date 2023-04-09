import { gql } from '@apollo/client'

export const MENU = gql`
  {
    items: allMenus(orderBy: id_ASC) {
      name
      link
    }
  }
`

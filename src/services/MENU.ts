import { gql } from '@apollo/client'

export const MENU = gql`
  query Menu {
    allMenus(orderBy: id_ASC) {
      name
      link
    }
  }
`

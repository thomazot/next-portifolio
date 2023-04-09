import { MENU } from 'services/MENU'
import { MenuItemType } from '.'

export const MenuMock: MenuItemType[] = [
  {
    name: 'Home',
    link: '#home'
  },
  {
    name: 'Projects',
    link: '#projects'
  },
  {
    name: 'Socials',
    link: '#socials'
  }
]

export const QueryMenuMock = [
  {
    request: {
      query: MENU
    },
    result: {
      data: {
        items: MenuMock
      }
    }
  }
]

import { useState, useCallback, MouseEvent, useEffect } from 'react'
import Link from 'next/link'

import * as S from './Menu.style'
import Search from 'components/Search/Search'
import Views from 'common/Views/Views'
import { useQuery } from '@apollo/client'
import { MENU } from 'services/MENU'

export type MenuItemType = {
  name: string
  link: string
  childrens?: MenuItemType[]
}

export type MenuQueryType = {
  items: MenuItemType[]
}

const Menu = () => {
  const [menu, setMenu] = useState<MenuItemType[]>([])
  const [open, setOpen] = useState(false)

  const { data, loading } = useQuery<MenuQueryType>(MENU)

  const handleChangeOpen = useCallback(() => {
    setOpen((oldOpen) => !oldOpen)
  }, [])

  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setOpen(false)
  }, [])

  const handleSearch = useCallback(
    (term: string) => {
      const itemSearch =
        term.trim().length && data?.items
          ? data.items.filter(
              (item) =>
                item.name
                  .toLocaleLowerCase()
                  .indexOf(term.toLocaleLowerCase()) > -1
            )
          : data?.items || []
      setMenu(itemSearch)
    },
    [data]
  )

  useEffect(() => {
    if (open) document.body.classList.add('overlay')
    else document.body.classList.remove('overlay')

    return () => {
      document.body.classList.remove('overlay')
    }
  }, [open])

  return (
    <>
      <S.Button open={open} onClick={handleChangeOpen}>
        <S.ButtonSpan></S.ButtonSpan>
        <S.ButtonSpan></S.ButtonSpan>
        <S.ButtonSpan></S.ButtonSpan>
        <S.ButtonSpan></S.ButtonSpan>
      </S.Button>
      <S.Content open={open}>
        <Views style={{ padding: '16px' }}>
          <Search loading={loading} onSubmit={handleSearch} />
        </Views>
        <S.List>
          {menu.map((item) => (
            <S.Item key={item.name}>
              <Link href={item.link} passHref legacyBehavior>
                <S.Link onClick={handleClick}>{item.name}</S.Link>
              </Link>
            </S.Item>
          ))}
        </S.List>
      </S.Content>
      <S.Overlay onClick={() => setOpen((oldOpen) => !oldOpen)} show={open} />
    </>
  )
}

export default Menu

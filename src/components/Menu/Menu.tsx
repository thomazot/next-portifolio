import { useState, useCallback, MouseEvent, FC, useEffect } from 'react'
import Link from 'next/link'

import * as S from './Menu.style'
import Search from 'components/Search/Search'
import Views from 'common/Views/Views'

export type MenuItemType = {
  name: string
  link: string
  children?: MenuItemType[]
}

export type MenuType = {
  items: MenuItemType[]
}

const Menu: FC<MenuType> = ({ items }) => {
  const [menu, setMemu] = useState<MenuItemType[]>(items)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChangeOpen = useCallback(() => {
    setOpen((oldOpen) => !oldOpen)
  }, [])

  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setOpen(false)
  }, [])

  const handleSearch = useCallback(
    (term: string) => {
      setLoading(true)
      const itemSearch = term.trim().length
        ? items.filter(
            (item) =>
              item.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) >
              -1
          )
        : items

      setMemu(itemSearch)
      setLoading(false)
    },
    [items]
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

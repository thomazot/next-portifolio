import { useState, useCallback, MouseEvent, FC, useEffect } from 'react'
import Link from 'next/link'

import * as S from './Menu.style'

export type MenuItemType = {
  name: string
  link: string
}

export type MenuType = {
  items: MenuItemType[]
}

const Menu: FC<MenuType> = ({ items }) => {
  const [open, setOpen] = useState(false)

  const handleChangeOpen = useCallback(() => {
    setOpen((oldOpen) => !oldOpen)
  }, [])

  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setOpen(false)
  }, [])

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
        <S.List>
          {items.map((item) => (
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

import { useState, useCallback, MouseEvent, FC } from 'react'
import gsap from 'gsap'
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
    const anchor = event.currentTarget.hash || 0
    setOpen(false)
    if (anchor) {
      gsap.to(window, {
        duration: 1,
        scrollTo: anchor
      })
    }
  }, [])

  return (
    <>
      <S.Button open={open} onClick={handleChangeOpen}>
        <span>Menu</span>
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
    </>
  )
}

export default Menu

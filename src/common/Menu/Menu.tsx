import { useState } from 'react'
import gsap from 'gsap'

import * as S from './Menu.style'

export default function Menu() {
  const [open, setOpen] = useState(false)

  function handleClick(anchor: string) {
    gsap.to(window, {
      duration: 1,
      scrollTo: anchor
    })
  }

  return (
    <S.Container>
      <S.Button open={open} onClick={() => setOpen((open) => !open)}>
        <span>Menu</span>
      </S.Button>
      <S.Content open={open}>
        <S.List>
          <S.Item onClick={() => setOpen(false)}>
            <S.Link onClick={() => handleClick('#home')}>Home</S.Link>
          </S.Item>
          <S.Item onClick={() => setOpen(false)}>
            <S.Link onClick={() => handleClick('#socials')}>Socials</S.Link>
          </S.Item>
        </S.List>
      </S.Content>
    </S.Container>
  )
}

import { useState } from 'react'
import Link from 'next/link'

import * as S from './Menu.style'

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <S.Container>
      <S.Button open={open} onClick={() => setOpen((open) => !open)}>
        <span>Menu</span>
      </S.Button>
      <S.Content open={open}>
        <S.List>
          <S.Item>
            <Link href="/" passHref>
              <S.Link>Home</S.Link>
            </Link>
          </S.Item>
          <S.Item>
            <Link href="/#projects" passHref>
              <S.Link>Projects</S.Link>
            </Link>
          </S.Item>
          <S.Item>
            <Link href="/#socials" passHref>
              <S.Link>Socials</S.Link>
            </Link>
          </S.Item>
        </S.List>
      </S.Content>
    </S.Container>
  )
}

import React from 'react'
import Link from 'next/link'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import * as CSS from './Socials.style'

const Socials: React.FC = () => {
  return (
    <CSS.Socials>
      <CSS.Container>
        <CSS.Title>Socials</CSS.Title>
        <CSS.List>
          <Link href="https://www.linkedin.com/in/thomazot/">
            <CSS.Link
              href="https://www.linkedin.com/in/thomazot/"
              target="_blank"
            >
              <FaLinkedin />
            </CSS.Link>
          </Link>
          <Link href="https://github.com/thomazot">
            <CSS.Link href="https://github.com/thomazot" target="_blank">
              <FaGithub />
            </CSS.Link>
          </Link>
          <Link href="mailto:contato@thomazot.com.br">
            <CSS.Link href="mailto:contato@thomazot.com.br" target="_blank">
              <MdEmail />
            </CSS.Link>
          </Link>
        </CSS.List>
      </CSS.Container>
    </CSS.Socials>
  )
}

export default Socials

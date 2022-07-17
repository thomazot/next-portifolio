import React from 'react'
import Link from 'next/link'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import * as CSS from './Socials.style'

const Socials: React.FC = () => {
  return (
    <CSS.Socials data-name="socials">
      <CSS.Container>
        <CSS.Title>Socials</CSS.Title>
        <CSS.List>
          <h3>
            <Link href="https://www.linkedin.com/in/thomazot/">
              <CSS.Link
                href="https://www.linkedin.com/in/thomazot/"
                target="_blank"
                title="LinkedIn"
              >
                <span>LinkedIn: @thomazot</span>
                <FaLinkedin />
              </CSS.Link>
            </Link>
          </h3>
          <h3>
            <Link href="https://github.com/thomazot">
              <CSS.Link
                title="GitHub"
                href="https://github.com/thomazot"
                target="_blank"
              >
                <span>GitHub: @thomazot</span>
                <FaGithub />
              </CSS.Link>
            </Link>
          </h3>
          <h3>
            <Link href="mailto:contato@thomazot.com.br">
              <CSS.Link
                title="E-Mail"
                href="mailto:contato@thomazot.com.br"
                target="_blank"
              >
                <span>E-Mail: @thomazot</span>
                <MdEmail />
              </CSS.Link>
            </Link>
          </h3>
        </CSS.List>
      </CSS.Container>
    </CSS.Socials>
  )
}

export default Socials

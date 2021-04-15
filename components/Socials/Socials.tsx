import React from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import * as CSS from './Socials.style'

const Socials: React.FC = () => {
  return (
    <CSS.Socials>
      <CSS.Container>
        <CSS.Title>Contacts</CSS.Title>
        <CSS.List>
          <CSS.Link
            target="_blank"
            href="https://www.linkedin.com/in/thomazot/"
          >
            <FaLinkedin />
          </CSS.Link>
          <CSS.Link target="_blank" href="https://github.com/thomazot">
            <FaGithub />
          </CSS.Link>
          <CSS.Link target="_blank" href="mailto:contato@thomazot.com.br">
            <MdEmail />
          </CSS.Link>
        </CSS.List>
      </CSS.Container>
    </CSS.Socials>
  )
}

export default Socials

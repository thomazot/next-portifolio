import React from 'react'
import Link from 'next/link'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import Container from 'common/Container/Container'
import Title from 'common/Title/Title'
import Views from 'common/Views/Views'

const Socials: React.FC = () => {
  return (
    <Container>
      <Title>Socials</Title>
      <Views>
        <h3>
          <Link
            href="https://www.linkedin.com/in/thomazot/"
            target="_blank"
            title="LinkedIn"
          >
            <span>LinkedIn: @thomazot</span>
            <FaLinkedin />
          </Link>
        </h3>
        <h3>
          <Link
            title="GitHub"
            href="https://github.com/thomazot"
            target="_blank"
          >
            <span>GitHub: @thomazot</span>
            <FaGithub />
          </Link>
        </h3>
        <h3>
          <Link
            title="E-Mail"
            href="mailto:contato@thomazot.com.br"
            target="_blank"
          >
            <span>E-Mail: @thomazot</span>
            <MdEmail />
          </Link>
        </h3>
      </Views>
    </Container>
  )
}

export default Socials

import React from 'react'
import Link from 'next/link'
import LogoIcon from 'styles/imgs/favicon.svg'

const Logo: React.FC = (props) => (
  <Link href="/">
    <a>
      <LogoIcon {...props} />
    </a>
  </Link>
)

export default Logo

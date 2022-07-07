import React from 'react'
import Link from 'next/link'
import LogoIcon from 'styles/imgs/favicon.svg'

const Logo: React.FC<{ width?: string; height?: string; title?: string }> = (
  props
) => (
  <Link href="/">
    <a>
      <LogoIcon {...props} />
    </a>
  </Link>
)

export default Logo

import React from 'react'
import Link from 'next/link'
import LogoIcon from 'assets/imgs/logo.svg'

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

import React from 'react'
import Link from 'next/link'
import LogoIcon from 'assets/imgs/logo.svg'

const Logo: React.FC<{ width?: string; height?: string; title?: string }> = (
  props
) => (
  <Link href="/">
    <LogoIcon {...props} />
  </Link>
)

export default Logo

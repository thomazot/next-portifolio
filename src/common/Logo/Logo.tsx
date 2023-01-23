import React from 'react'
import Link from 'next/link'
import { LogoStyle } from './Logo.style'

export type LogoSize = 'XS' | 'S' | 'R' | 'L' | 'XL'

export type LogoProps = {
  size?: LogoSize
  link?: string
}

const Logo: React.FC<LogoProps> = ({ size = 'R', link = '/' }) => (
  <Link href={link}>
    <LogoStyle size={size} />
  </Link>
)

export default Logo

import React from 'react'
import * as CSS from './Logo.style'

type Props = {
  title?: string
}

const Logo: React.FC<Props> = ({ title = 'thomazot' }) => {
  return <CSS.H1>{title}</CSS.H1>
}

export default Logo

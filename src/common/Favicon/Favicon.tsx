import React from 'react'
import Link from 'next/link'
import FaviconIcon from '../../assets/imgs/favicon.svg'

const Favicon: React.FC<{
  width?: string
  height?: string
  title?: string
}> = (props) => (
  <Link href="/">
    <a>
      <FaviconIcon {...props} />
    </a>
  </Link>
)

export default Favicon

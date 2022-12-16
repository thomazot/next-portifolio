import React from 'react'
import Link from 'next/link'

import FaviconIcon from '../../assets/imgs/favicon.svg'

const Favicon: React.FC<{
  width?: string
  height?: string
  title?: string
}> = (props) => (
  <Link href="/">
    <FaviconIcon {...props} />
  </Link>
)

export default Favicon

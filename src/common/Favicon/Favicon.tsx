import React from 'react'
import Link from 'next/link'

import FaviconIcon from '../../assets/imgs/favicon.svg'

const Favicon: React.FC<{
  width?: string
  height?: string
  title?: string
}> = ({ width = '20px', height = '20px', ...iconProps }) => (
  <Link href="/">
    <FaviconIcon width={width} height={height} {...iconProps} />
  </Link>
)

export default Favicon

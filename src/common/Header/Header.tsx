import React from 'react'
import Image from 'next/image'
import * as CSS from './Header.style'
import Link from 'next/link'

const Header = () => {
  return (
    <CSS.Header>
      <div className="container">
        <Link href="/">
          <a>
            <Image src="/logo.svg" width="300" height="74" />
          </a>
        </Link>
      </div>
    </CSS.Header>
  )
}

export default Header

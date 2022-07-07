import React from 'react'
import Link from 'next/link'
import IRepository from '../../@types/IRepository'

import * as CSS from './Repository.style'

const Repository: React.FC<{ repository: IRepository }> = ({ repository }) => {
  return (
    <CSS.Repository>
      <header>
        <h1>{repository.description}</h1>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: repository.shortDescriptionHTML }}
      ></div>
      <footer>
        <Link href={`/repository/${repository.name}`}>
          <a>View more</a>
        </Link>
      </footer>
    </CSS.Repository>
  )
}

export default Repository

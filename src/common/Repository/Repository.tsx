import React from 'react'
import Link from 'next/link'
import IRepository from 'types/IRepository'

import * as CSS from './Repository.style'

const Repository: React.FC<{ repository: IRepository }> = ({ repository }) => {
  return (
    <CSS.Repository>
      <header>
        <h3>{repository.description}</h3>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: repository.shortDescriptionHTML }}
      ></div>
      <footer>
        <Link href={`/repository/${repository.name}`}>View more</Link>
      </footer>
    </CSS.Repository>
  )
}

export default Repository

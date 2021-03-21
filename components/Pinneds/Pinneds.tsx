import React from 'react'
import IPinneds from '../../typings/IPinneds'
import Repository from '../Repository'

import * as CSS from './Pinneds.style'

const Pinneds: React.FC<IPinneds> = ({ repositories }) => {
  return (
    <CSS.Pinneds>
      <div>
        <CSS.Title>Projects</CSS.Title>
        <CSS.List>
          {repositories.map(repository => (
            <Repository key={repository.name} repository={repository} />
          ))}
        </CSS.List>
      </div>
    </CSS.Pinneds>
  )
}

export default Pinneds

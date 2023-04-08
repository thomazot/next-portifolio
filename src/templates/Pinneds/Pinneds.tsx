import React from 'react'
import IPinneds from 'types/IPinneds'
import Repository from 'common/Repository'

import Container from 'common/Container/Container'
import Views from 'common/Views/Views'
import Title from 'common/Title/Title'

const Pinneds: React.FC<IPinneds> = ({ repositories }) => {
  return (
    <Container>
      <Views direction="column" gap={1}>
        <Title>Projects</Title>
        <Views gap={1}>
          {repositories.map((repository) => (
            <Repository key={repository.name} repository={repository} />
          ))}
        </Views>
      </Views>
    </Container>
  )
}

export default Pinneds

import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Button from 'common/Form/Button'
import FieldText from 'common/Form/FieldText'

import * as S from './Login.styles'

const schemaLogin = yup.object({
  username: yup.string().required('Ops! E-mail is required'),
  password: yup.string().required('Ops! Password is required')
})

interface IFormInput {
  username: string
  password: string
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<IFormInput>({
    mode: 'onChange',
    resolver: yupResolver(schemaLogin)
  })
  const { errors } = formState

  async function handleSubmitLogin(data: IFormInput) {
    console.log('submit', data)
  }

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitLogin)}>
      <S.Title>Dashboard</S.Title>
      <FieldText
        label="Username"
        {...register('username')}
        error={errors?.username}
      />
      <FieldText
        label="Password"
        {...register('password')}
        error={errors?.password}
      />
      <Button>Login</Button>
    </S.Form>
  )
}

export default Login

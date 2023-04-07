import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Button from 'forms/Button'
import FieldText from 'forms/FieldText'

import * as S from './Login.styles'
import Views from 'common/Views/Views'
import Container from 'common/Container/Container'
import { useAuth } from 'contexts/AuthContext'

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

  const { signInWithEmailAndPassword, error, loading } = useAuth()

  async function handleSubmitLogin(data: IFormInput) {
    signInWithEmailAndPassword(data.username, data.password)
  }

  return (
    <Container fullscreen center>
      <Views center>
        <S.Form onSubmit={handleSubmit(handleSubmitLogin)}>
          <S.Title>Dashboard</S.Title>
          <FieldText
            label="Username"
            {...register('username')}
            error={errors?.username}
            disabled={loading}
          />
          <FieldText
            label="Password"
            type="password"
            {...register('password')}
            error={errors?.password}
            disabled={loading}
          />
          {error && <Views>{error.message}</Views>}
          <Button loading={loading ? true : false}>Login</Button>
        </S.Form>
      </Views>
    </Container>
  )
}

export default Login

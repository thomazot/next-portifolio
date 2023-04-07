import Login from 'components/Login/Login'
import useFirebaseAuth from 'hooks/useFirebaseAuth'
import React from 'react'

type AuthWrapper = {
  children: React.ReactNode | React.ReactNode[]
}

const AuthWrapper: React.FC<AuthWrapper> = ({ children }) => {
  const { isAuth, auth } = useFirebaseAuth()

  console.log('AuthWrapper: ', isAuth, auth)

  if (!isAuth) return <Login />

  return <>{children}</>
}

export default AuthWrapper

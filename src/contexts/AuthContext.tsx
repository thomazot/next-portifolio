import { createContext, useContext } from 'react'

import useFirebaseAuth, {
  ErrorType,
  SignInWithEmailAndPasswordType,
  SignOutType,
  UserType
} from 'hooks/useFirebaseAuth'
import Login from 'templates/Login'

type AuthContextType = {
  authUser?: UserType
  loading: boolean
  signInWithEmailAndPassword: SignInWithEmailAndPasswordType
  signOut: SignOutType
  error?: ErrorType
}

const authContext = createContext<AuthContextType>({
  authUser: undefined,
  loading: true,
  signInWithEmailAndPassword: () => Promise.resolve(undefined),
  signOut: () => console.log('context default signOut')
})

export function AuthProvider({
  children
}: {
  children: React.ReactNode | React.ReactNode[]
}) {
  const { loading, authUser, ...others } = useFirebaseAuth()

  return (
    <authContext.Provider value={{ ...others, loading, authUser }}>
      {!authUser ? <Login /> : children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error('useAuth must be used within a AuthProvider')
  return context
}

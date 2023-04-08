import { useState, useEffect } from 'react'
import * as firebase from '../services/firebase'
import { UserCredential } from 'firebase/auth'

export type UserType = {
  uid: string
  email: string
}

export type SignInWithEmailAndPasswordType = (
  email: string,
  password: string
) => Promise<UserCredential | undefined>

export type SignOutType = () => void

export type ErrorType = { code: string; message: string }

const formatAuthUser = (user: UserType) => ({
  uid: user.uid,
  email: user.email
})

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<UserType>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ErrorType>()

  const authStateChanged = (authState: UserType) => {
    setLoading(true)

    if (!authState) {
      setLoading(false)
      return
    }

    const formattedUser = formatAuthUser(authState)
    setAuthUser(formattedUser)
    setLoading(false)
  }

  const clear = () => {
    setAuthUser(undefined)
    setLoading(false)
  }

  const signInWithEmailAndPassword: SignInWithEmailAndPasswordType = async (
    email: string,
    password: string
  ) => {
    try {
      if (authUser) return
      setLoading(true)
      setError(undefined)
      const user = await firebase
        .signInWithEmailAndPassword(email, password)
        .finally(() => setLoading(false))

      if (!user)
        setError({
          code: '401',
          message: 'Invalid email or password'
        })

      return user
    } catch (error: any) {
      setError({
        code: error.code,
        message: error.message
      })
    }
  }

  const signOut = async () => {
    try {
      firebase.signOut().then(clear)
    } catch (error: any) {
      setError({
        code: error.code,
        message: error.message
      })
    }
  }

  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChanged(authStateChanged)
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe()
    }
  }, [])

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    signOut,
    error
  }
}

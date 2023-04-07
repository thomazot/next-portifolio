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
    if (!authState) {
      setLoading(false)
      return
    }

    setLoading(true)
    const formatedUser = formatAuthUser(authState)
    setAuthUser(formatedUser)
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
      setLoading(true)
      setError(undefined)
      return await firebase
        .signInWithEmailAndPassword(email, password)
        .finally(() => setLoading(false))
    } catch (error: any) {
      setError({
        code: error.code,
        message: error.message
      })
    }
  }

  const signOut = () => firebase.signOut().then(clear)

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

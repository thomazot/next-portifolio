import { useState, useEffect } from 'react'
import * as firebase from '../services/firebase'

type UserType = {
  uid: string
  email: string
}

const formatAuthUser = (user: UserType) => ({
  uid: user.uid,
  email: user.email
})

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)

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
    setAuthUser(null)
    setLoading(true)
  }

  const signInWithEmailAndPassword = (email: string, password: string) =>
    firebase.signInWithEmailAndPassword(email, password)

  const signOut = () => firebase.signOut().then(clear)

  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChanged(authStateChanged)
    return () => unsubscribe()
  }, [])

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    signOut
  }
}

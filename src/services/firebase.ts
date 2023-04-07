import * as firebase from 'firebase/app'
import * as authFirebase from 'firebase/auth'

firebase.initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
})

export const signOut = (): Promise<void> =>
  authFirebase.signOut(authFirebase.getAuth(firebase.getApp()))

export const onAuthStateChanged = (authStateChanged: any) =>
  authFirebase.onAuthStateChanged(
    authFirebase.getAuth(firebase.getApp()),
    authStateChanged
  )

export const signInWithEmailAndPassword = (email: string, password: string) =>
  authFirebase.signInWithEmailAndPassword(
    authFirebase.getAuth(firebase.getApp()),
    email,
    password
  )

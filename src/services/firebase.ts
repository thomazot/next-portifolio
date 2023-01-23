import firebase from 'firebase/app'
import authFirebase from 'firebase/auth'

if (!firebase.getApp()) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  })
}

export const auth = authFirebase.getAuth(firebase.getApp())
export const signOut = () => authFirebase.signOut(auth)
export const onAuthStateChanged = (authStateChanged: any) =>
  authFirebase.onAuthStateChanged(auth, authStateChanged)
export const signInWithEmailAndPassword = (email: string, password: string) =>
  authFirebase.signInWithEmailAndPassword(auth, email, password)
export default firebase

import { useAuth } from 'contexts/AuthContext'
import LoginComponent from 'components/Login'

const Login = () => {
  const { loading, error, signInWithEmailAndPassword } = useAuth()
  return (
    <>
      <LoginComponent
        loading={loading}
        error={error}
        onSubmit={signInWithEmailAndPassword}
      />
    </>
  )
}
export default Login

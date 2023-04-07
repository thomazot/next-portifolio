import { useAuth } from 'contexts/AuthContext'
import Button from 'forms/Button'

export default function Logout() {
  const { signOut } = useAuth()

  function handleClick() {
    console.log('handleClick')
    signOut()
  }

  return (
    <Button inline type="button" onClick={handleClick}>
      Logout
    </Button>
  )
}

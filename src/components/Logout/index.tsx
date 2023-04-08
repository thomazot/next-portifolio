import Views from 'common/Views'
import { useAuth } from 'contexts/AuthContext'
import Button from 'forms/Button'
import { IoExitOutline } from 'react-icons/io5'
import { SizeType } from 'styles/theme'

export default function Logout() {
  const { signOut } = useAuth()

  function handleClick() {
    signOut()
  }

  return (
    <Views>
      <Button
        inline
        type="button"
        onClick={handleClick}
        themeType="theme-inverted"
        icon={<IoExitOutline width="30px" height="30px" />}
        iconSize={SizeType.EXTRA_LARGE}
      />
    </Views>
  )
}

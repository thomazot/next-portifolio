import Container from 'common/Container/Container'
import Header from 'components/Header'
import Views from 'common/Views/Views'
import Logout from 'components/Logout'
import Timer from 'components/Timer/Timer'
import { AuthProvider } from 'contexts/AuthContext'

const Dashboard = () => {
  return (
    <AuthProvider>
      <Views style={{ height: '100%', maxHeight: '100%' }} direction="column">
        <Header>
          <Logout />
        </Header>
        <Container center>
          <Timer />
        </Container>
      </Views>
    </AuthProvider>
  )
}

export default Dashboard

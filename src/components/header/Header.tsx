import { useSelector } from 'react-redux'
import './header.scss'
import { AccountCircle, Logout } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

interface HeaderTab {
  title: string
  link: string
}
interface HeaderProps {
  headertabs: HeaderTab[]
}

const Header: React.FC<HeaderProps> = ({ headertabs }) => {
  const { user } = useSelector((state: any) => state.profile)
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('refreshToken')
    navigate(0)
  }

  return (
    <div className="headerWrapper">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" width={200} />
      </div>
      <div className="options">
        {headertabs.map((tab, i) => {
          return <span key={i}>{tab.title}</span>
        })}
        {user ? (
          <>
            <div className="profile">
              {user.avatar ? (
                <img src={user?.avatar} alt="dp" />
              ) : (
                <AccountCircle />
              )}
              <p>{user.name}</p>
            </div>
            <Logout style={{ cursor: 'pointer' }} onClick={handleLogout} />
          </>
        ) : (
          <button onClick={() => navigate('/login')}>Get in Touch</button>
        )}
      </div>
    </div>
  )
}
export default Header

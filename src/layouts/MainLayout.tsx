import React, { ReactNode, useEffect } from 'react'
import Header from '../components/header/Header'
import { sendRequest } from '../services/middleware'
import { ApiConfig } from '../services/ApiConfig'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/features/profileSlice'
import Footer from '../components/footer/Footer'

const tabs = [
  { title: 'About', link: '/about' },
  { title: 'Services', link: '/services' },
  { title: 'Projects', link: '/projects' },
]

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const dispatch = useDispatch()

  const handleProfile = async () => {
    const response = await sendRequest('GET', ApiConfig.profile)
    if (response.data) {
      dispatch(setUserData(response.data))
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem('accessToken')) {
      handleProfile()
    }
  }, [])
  return (
    <div>
      <Header headertabs={tabs} />
      {children}
      <Footer />
    </div>
  )
}

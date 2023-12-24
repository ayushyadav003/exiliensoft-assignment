import { useState } from 'react'
import styled from '@emotion/styled'
import toast from 'react-hot-toast'
import { CircularProgress } from '@mui/material'
import { LoginApi } from '../../services/auth/Login'
import { ApiConfig } from '../../services/ApiConfig'
import { useNavigate } from 'react-router-dom'

const LoginWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  width: '30%',
  padding: '0 45px 30px 45px',
  margin: '5rem auto auto auto',
})
const Loginform = styled('form')({
  display: 'grid',
  width: '100%',
  gap: '1rem',
})
const Heading = styled('h2')({
  color: '#6153CD',
  textAlign: 'center',
  fontSize: '45px',
  fontWeight: '700',
})
const Input = styled('input')({
  border: '1px solid #dcdcdc',
  padding: '15px',
  borderRadius: '10px',
})

export function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleLofinForm = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await LoginApi('POST', ApiConfig.userLogin, user)
      if (response && response.data) {
        console.log('Received data:', response.data)
        setIsLoading(false)
        sessionStorage.setItem('accessToken', response.data.access_token)
        sessionStorage.setItem('refreshToken', response.data.refresh_token)
        navigate('/')
        toast.success('Logged in successfully!')
      } else {
        setIsLoading(false)
        toast.error('Please try again.')
      }
    } catch (error) {
      console.error(error)
      setIsLoading(false)
      toast.error('Something went wrong :(')
    }
  }

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <LoginWrapper>
      <Heading>Login</Heading>
      <Loginform onSubmit={(e) => handleLofinForm(e)}>
        <Input
          type="email"
          id="email"
          name="email"
          required
          placeholder="abc@example.com"
          onChange={handleChange}
        />
        <Input
          type="password"
          id="password"
          name="password"
          required
          placeholder="••••••••••"
          onChange={handleChange}
        />
        <button type="submit" style={{ margin: 'auto' }} disabled={isLoading}>
          Submit
          {isLoading && (
            <CircularProgress
              style={{ color: '#fff', width: '30px', height: '30px' }}
            />
          )}
        </button>
        <p style={{ textAlign: 'center' }}>
          Dont have an account?{'  '}
          <span style={{ color: '#6153CD', cursor: 'pointer' }}>Signup</span>
        </p>
      </Loginform>
    </LoginWrapper>
  )
}

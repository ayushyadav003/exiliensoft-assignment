import { Routes as RouterRoutes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import { MainLayout } from '../layouts/MainLayout'
import { Login } from '../pages/auth/Login'

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login />} />
      </RouterRoutes>
    </BrowserRouter>
  )
}

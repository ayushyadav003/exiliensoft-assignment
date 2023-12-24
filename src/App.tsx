import './App.css'
import AppRoutes from './routes/Routes'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <Toaster />
    </div>
  )
}

export default App

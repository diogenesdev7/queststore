import { Outlet } from 'react-router'
import Header from './components/Header'
import './styles/index.scss'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
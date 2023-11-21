import { useContext, useEffect } from 'react'
import Hero from '../components/Hero'
import News from '../components/News'

import '../styles/home.scss'
import { LojaContext } from '../context/LojaContext'

const Home = () => {
  const {desativaLoja, desativaMenu} = useContext(LojaContext)

  useEffect(() => {
    window.scrollTo(0,0)
    desativaLoja()
    desativaMenu()
  }, [])

  return (
    <div>
      <Hero />
      <News />
    </div>
  )
}

export default Home
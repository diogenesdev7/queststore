import '../styles/loja.scss'

import { useContext, useEffect } from "react"
import { LojaContext } from "../context/LojaContext"

import Slider from '../components/slider'
import Cart from '../components/Cart'
import Confirm from '../components/Confirm'


const Loja = () => {
  const {ativaLoja, aventura, corrida, esporte, fps, rpg, desativaMenu} = useContext(LojaContext)

  useEffect(() => {
    ativaLoja()
  }, [])


  return (
    <div className="loja">
      <h2>Aventura</h2>
      <Slider products={aventura} />
      <h2>Corrida</h2>
      <Slider products={corrida} />
      <h2>Esporte</h2>
      <Slider products={esporte} />
      <h2>FPS</h2>
      <Slider products={fps} />
      <h2>RPG</h2>
      <Slider products={rpg} />
      <Cart />
      <Confirm />
    </div>
  )
}

export default Loja
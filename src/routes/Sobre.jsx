import { useContext, useEffect } from "react"
import joystick from "../assets/img/joystick.png"

import '../styles/sobre.scss'
import { LojaContext } from "../context/LojaContext"

const Sobre = () => {
  const {desativaLoja, desativaMenu} = useContext(LojaContext)
  useEffect(() => {
    desativaLoja()
    desativaMenu()
  }, [])

  return (
    <div>
        <div className="sobre">
            <div className="titulo">
              <h2 data-aos='fade-right'>Nossa Paixão por Jogos</h2>
              <img data-aos='zoom-in' src={joystick} />
            </div>
            <p data-aos='fade-up'>
                Bem-vindo à nossa loja de jogos! Somos um grupo apaixonado por jogos, e nossa missão é proporcionar a você a melhor experiência de entretenimento digital.
            Nossa jornada começou com a ideia de compartilhar o amor pelos jogos com o mundo. Desde então, temos trabalhado incansavelmente para criar um espaço onde os entusiastas de jogos podem encontrar os títulos mais emocionantes, as últimas novidades e uma comunidade amigável.
            Nossa equipe é composta por gamers ávidos e experts da indústria que estão sempre atualizados com as tendências e novidades. Estamos empenhados em oferecer a você não apenas os melhores jogos, mas também informações e suporte excepcionais.
            </p>
            <p data-aos='fade-up'>Na nossa loja, a diversão é a palavra de ordem. Acreditamos que os jogos são uma forma única de escapar para mundos fascinantes, desafiar a mente e criar memórias incríveis. Estamos aqui para compartilhar essa paixão com você.</p>
            <p data-aos='fade-up'>Obrigado por nos escolher como sua fonte de diversão e entretenimento. Junte-se a nós nesta jornada e descubra um mundo de jogos emocionantes, amizades duradouras e momentos inesquecíveis. Estamos ansiosos para fazer parte da sua aventura gamer.</p>

            <p data-aos='fade-up'>Obrigado por escolher nossa loja de jogos. Estamos aqui para tornar sua experiência gamer incrível e compartilhar nossa paixão pelos jogos com você. Junte-se a nós e divirta-se explorando os melhores títulos e fazendo novas amizades enquanto criamos memórias inesquecíveis juntos.</p>
        </div>
    </div>
)
}

export default Sobre
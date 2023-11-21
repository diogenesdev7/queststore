import { register } from 'swiper/element/bundle'
register();
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'
import 'swiper/css/effect-fade'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import { BiChevronRight } from 'react-icons/bi'

import god from '../assets/img/aventura/god.jpg'
import donkey from '../assets/img/aventura/ff7.jpg'
import thelast from '../assets/img/aventura/thelast.webp'
import { Link } from 'react-router-dom';

const data = [
  {id: 1, img: god, txt: 'Jogos épicos, preços épicos.'},
  {id: 2, img: thelast, txt: 'Pule para o próximo nível com nossos jogos.'},
  {id: 3, img: donkey, txt: 'A sua jornada gamer começa aqui.'},
]


const Hero = () => {
  return (
    <div className='hero'>
      <Swiper className='swiper' modules={[EffectFade]} effect='fade' slidesPerView={1} autoplay={{delay: 7000}}>
                {data.map((item, index) => {
                    return <SwiperSlide className='swiperslide' key={index}>
                        <img data-aos='zoom-out' src={item.img} alt={`imagem ${item.id}`} />
                        <div className="overlay">
                            <h2 data-aos='fade-up'>{item.txt}</h2>
                            <Link to='/loja'><button className='btn-irLoja'>Conheça a loja <BiChevronRight /></button></Link>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
    </div>
  )
}

export default Hero
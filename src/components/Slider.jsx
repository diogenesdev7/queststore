import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'

import '../styles/slider.scss'

import formatCurrency from '../utils/formatCurrency'
import { useContext } from 'react';
import { LojaContext } from '../context/LojaContext';

const Slider = ({ products }) => {
      const {addToCart} = useContext(LojaContext)

      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 40,
        speed: 700,
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1105: {
            slidesPerView: 4
          }
        },
        on: {
          init() {
    
          },
        },
      }



  return (
    <div>
        <Swiper
        className='slider'
        { ...swiperParams }
        modules={[Navigation]}
        navigation
      >
        
        {products.map(item => {
            return <SwiperSlide data-aos='zoom-in' className='slider-item' key={item.id}>
                     <img data-aos='fade-right' src={item.img} alt={item.title} />
                     <div className="info">
                      <h3>{item.title}</h3>
                      <p>{formatCurrency(item.price)}</p>
                      <button onClick={() => addToCart(item)}>+ Carrinho</button>
                     </div>
                   </SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}

export default Slider
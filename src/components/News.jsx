import '../styles/news.scss'

import { Link } from 'react-router-dom'

import noticias from '../utils/noticias.js'



const News = () => {

  return (
    <div className='container-news'>
        <h2>Novidades</h2>
        <section className='section-news'>
            {noticias.map(item => {
                return <Link to={`/newspage/${item.id}`} key={item.id} className='card-news'>
                          <img src={item.img} alt={item.titulo} />
                          <div className="titulo-noticia">
                            <h3>{item.titulo}</h3>
                          </div>
                       </Link>
            })}
        </section>
    </div>
  )
}

export default News
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import noticias from '../utils/noticias'
import '../styles/newsPage.scss'

const NewsPage = () => {
    const { id } = useParams()
    const newsItem = noticias.find(item => item.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0,0)
  }, [id])

  return (
    <div className='news-page'>
        <div className="folha">
            <h1>{newsItem.titulo}</h1>
            <img src={newsItem.img} alt={newsItem.titulo} />
            <p>{newsItem.text}</p>
            <h2>Confira o trailer</h2>
            <iframe src={newsItem.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default NewsPage
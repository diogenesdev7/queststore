import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Sobre from './routes/Sobre.jsx'
import Loja from './routes/Loja.jsx'
import NewsPage from './routes/NewsPage.jsx'

import noticias from './utils/noticias.js'
import { LojaProvider } from './context/LojaContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Home />},
      {path: '/sobre', element: <Sobre />},
      {path: '/loja', element: <Loja />},
      {path: '/newspage/:id', element: <NewsPage noticias={noticias} />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LojaProvider>
      <RouterProvider router={router} />
    </LojaProvider>
  </React.StrictMode>,
)

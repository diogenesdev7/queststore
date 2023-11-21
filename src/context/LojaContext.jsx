import { createContext, useState } from 'react'

export const LojaContext = createContext()

import {aventura, corrida, fps, rpg, esporte} from '../utils/products.js'

export const LojaProvider = ({ children }) => {
    const [loja, setLoja] = useState(false)
    const [preço, setPreço] = useState(0)
    const [qtd, setQtd] = useState(0)
    const [menuMobile, setMenuMobile] = useState(false)
    let [cart, setCart] = useState([])
    let [showCart, setShowCart] = useState(false)
    let [confirm, setConfirm] = useState(false)

    const handleConfirm = () => {
        setConfirm(!confirm)
        if (confirm) {
            setCart([])
            setQtd(0)
            setPreço(0)
        }
    }

    const handleShowCart = () => {
        setShowCart(!showCart)
        console.log(showCart)
    }

    const desativaMenu = () => {
        setMenuMobile(false)
    }

    const ativaLoja = () => {
        setLoja(true)
    }

    const desativaLoja = () => {
        setLoja(false)
    }

    const addToCart = (prod) => {
        const existingItem = cart.find(item => item.id === prod.id)
        if (existingItem) {
            existingItem.quantity = existingItem.quantity + 1
        } else {
            const newCart = [...cart, {...prod, quantity: 1}]
            setCart(newCart)
        }
        setQtd(qtd + 1)
        setPreço(preço + prod.price)
        console.log(cart.length)
    }

    const removeFromCart = (prod) => {
        const existingItem = cart.find(item => item.id === prod.id)
        if (existingItem.quantity > 1) {
            existingItem.quantity = existingItem.quantity - 1
        } else {
            const newCart = cart.filter(item => item.id !== prod.id)
            setCart(newCart)
        }
        setQtd(qtd - 1)
        setPreço(preço - prod.price)
    }

    const resetCart = () => {
        setCart([])
        setQtd(0)
        setPreço(0)
    }

   

    
    return  <LojaContext.Provider value={{ loja, ativaLoja, desativaLoja,
         qtd, setQtd, preço, aventura, corrida, esporte, rpg, fps, cart, setCart,
         menuMobile, setMenuMobile, desativaMenu, addToCart, removeFromCart,
         handleShowCart, showCart, handleConfirm, confirm, resetCart
    }}>
                { children }
            </LojaContext.Provider>
}
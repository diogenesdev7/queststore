import { useContext } from "react"
import { LojaContext } from "../context/LojaContext"

import '../styles/cart.scss'
import formatCurrency from "../utils/formatCurrency"

import { IoAdd, IoAddCircleOutline, IoRemoveCircleOutline  } from "react-icons/io5";


const Cart = () => {   
    const {handleConfirm, preço, resetCart, cart, addToCart, removeFromCart, showCart} = useContext(LojaContext)

    if (cart.length === 0) return <div className={`cart ${showCart ? 'show-cart' : ''}`}><p className="naoha">Não há items no carrinho.</p></div>

    

    return (
            <div className={`cart ${showCart ? 'show-cart' : ''}`}>
                <header>
                    <h3 className="preço">Total: {formatCurrency(preço)}</h3>
                    <div className="buttons">
                        <button onClick={resetCart}>Cancelar</button>
                        <button onClick={handleConfirm}>Confirmar</button>
                    </div>
                </header>
                <ul>
                    {cart.map(item => {
                        return <li key={item.id}>
                                    <div className="img">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <h2>{item.title}</h2>
                                    <h3>{formatCurrency(item.price)}</h3>
                                    <div className="qtd">
                                        <h4>Qtd: {item.quantity}</h4>
                                        <div className="btns-qtd">
                                            <IoRemoveCircleOutline onClick={() => removeFromCart(item)} />
                                            <IoAddCircleOutline onClick={() => addToCart(item)} />
                                        </div>
                                    </div>
                               </li>
                    })}
                </ul>
            </div>
          )
        
    }

export default Cart
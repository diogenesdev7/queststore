import { useContext, useState } from 'react'
import '../styles/confirm.scss'
import { LojaContext } from '../context/LojaContext'
import formatCurrency from '../utils/formatCurrency'

import { IoGameControllerOutline } from "react-icons/io5";


const Confirm = () => {
    const {preço, confirm, handleConfirm} = useContext(LojaContext)

    
        return confirm ? (
            <div className='confirm-container'>
                <div className="confirm-msg">
                    <h2>Compra confirmada no valor de {formatCurrency(preço)}</h2>
                    <p>Agradecemos pela sua preferência! Divirta-se com seus novos jogos.
        </p>
        
                    <button onClick={handleConfirm}>Continuar <IoGameControllerOutline /></button>
                </div>
            </div>
          ) 
          :
          null      
    }

export default Confirm
import '../styles/header.scss'

import { Link } from 'react-router-dom'

import { BiCart, BiJoystick } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'

import { useContext, useEffect, useState } from 'react'
import { LojaContext } from '../context/LojaContext'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
    const {loja, qtd, menuMobile, setMenuMobile, handleShowCart} = useContext(LojaContext)

    const handleMenuMobile = () => {
        setMenuMobile(!menuMobile)
    }

    useEffect(() => {
        AOS.init()
    })

    return (
        <div>
            <header className='header'>
                <Link to='/'>
                    <div data-aos="fade-right" className="logo">
                        <BiJoystick />
                        <h1>QuestStore</h1>
                    </div>
                </Link>
                <nav data-aos='fade-down' data-aos-duration='500' className='menu-desktop'>
                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to='/sobre'>Sobre</Link>
                        <Link to='/loja'>Loja</Link>
                    </ul>
                </nav>
                <nav className={`menu-mobile ${menuMobile ? 'mobile-show' : ''}`}>
                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to='/sobre'>Sobre</Link>
                        <Link to='/loja'>Loja</Link>
                    </ul>
                </nav>
                <FiMenu className='mobile-icon' onClick={handleMenuMobile} />

                {
                    loja ? <div className="cart-icon" onClick={handleShowCart} >
                                <BiCart/>
                                <p>{ qtd }</p>
                           </div> : '' 
                }

                

            </header>
                <div className={`menu-mobile-overlay ${menuMobile ? 'overlay-show' : ''}`}></div>
        </div>
    )
}

export default Header
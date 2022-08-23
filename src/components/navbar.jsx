import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import './navbar.css'

import logo from '../assets/logo.png'

const Navbar = ({ pokemonFilter }) => {
  return (
    <>
        <div className="principal">
            <div className="container">
                <div className="content">
                    <img src={logo} alt="logo" />
                    <FaUserAlt size={50} color='#FFF' />
                </div>
            </div>
        </div>
        <div className="search-area">
            <div className="content-search">
                <h1>Pokédex</h1>
                <p>Procure por um pokemon utilizando o seu nome</p>
                <input type="search" placeholder='Digite um nome' onChange={(e) => pokemonFilter(e.target.value) } />
            </div>
        </div>
    </>
  )
}

export default Navbar
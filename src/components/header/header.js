import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo2.jpeg'

function Header() {
   
   return (
      <header>
         <img id='logo' src={Logo} />
         <nav>
            <ul>
               <Link style={{textDecoration: 'none'}} to='/'>
               <li>Home</li>
               </Link>
               <Link style={{textDecoration: 'none'}} to='/contato'>
               <li>Contato</li>
               </Link>
               <Link style={{textDecoration: 'none'}} to='/fotos'>
               <li>Fotos</li>
               </Link>
            </ul>
         </nav>
      </header>
   )
}


export default Header;
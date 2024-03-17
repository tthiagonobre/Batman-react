import React from "react";
import './style.css'
import Logo from '../../assets/logo2.jpeg'
import { Link } from 'react-router-dom';

function Footer(){
   return (
      <>
      <footer>
         <img id="logo" src={Logo} />
         <span>Todos os direitos reservados ©</span>
         <span>Desenvolvido por: tthiagonobre</span>
         <nav className="footer-navigation">
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
    </footer> 
      </>
   )
}

export default Footer;
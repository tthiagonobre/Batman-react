import React from 'react';
import './style.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Contato(){
   return (
      <>
      <Header />
         <div className='container'>
            <form>
               <h1>Fale conosco</h1>
               <input type='text' id='primeiroNome' placeholder='Primeiro nome' required />
               <input type='text' id='ultimoNome' placeholder='Último nome' required />
               <input type='email' id='email' placeholder='Email' required />
               <input type='text' id='telefone' placeholder='Telefone' required />
               <h4> deixe sua mensagem abaixo:</h4>
               <textarea required></textarea>
               <input type='submit' value='Enviar' id='button' />
            </form>
         </div>
      <Footer />
      </>
   )
}

export default Contato;
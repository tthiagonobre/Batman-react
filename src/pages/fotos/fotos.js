import React from 'react';
import './style.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Image1 from '..//..//assets/pagFotos/1.webp'
import Image2 from '..//..//assets/pagFotos/2.jpeg'
import Image3 from '..//..//assets/pagFotos/3.jpg'
import Image4 from '..//..//assets/pagFotos/4.webp'
import Image5 from '..//..//assets/pagFotos/5.jpeg'
import Image6 from '..//..//assets/pagFotos/6.jpeg'
import Image7 from '..//..//assets/pagFotos/7.jpg'
import Image8 from '..//..//assets/pagFotos/8.webp'
import Image9 from '..//..//assets/pagFotos/9.webp'
import Image10 from '..//..//assets/pagFotos/10.jpg'
import Image11 from '..//..//assets/pagFotos/11.webp'
import Image12 from '..//..//assets/pagFotos/12.jpg'
import Image13 from '..//..//assets/pagFotos/13.webp'
import Image14 from '..//..//assets/pagFotos/14.jpg'
import Image15 from '..//..//assets/pagFotos/15.webp'
import Image16 from '..//..//assets/pagFotos/16.webp'

function Fotos(){
   return (
      <>
      <Header />
      <div className='container-gallery'>
         <div className='title'>
            <h1>Galeria de fotos</h1>
         </div>
         <main>
            <div className='gallery-container'>
               <a href={Image1} target='_blank' className='gallery-items'>
                  <img src={Image1} alt='Batman'/>
               </a>
               <a href={Image2} target='_blank' className='gallery-items'>
                  <img src={Image2} alt='Bruce Wayne'/>
               </a>
               
               <a href={Image4} target='_blank' className='gallery-items'>
                  <img src={Image4} alt='Batman and Catwoman'/>
               </a>
               <a href={Image5} target='_blank' className='gallery-items'>
                  <img src={Image5} alt='Batman'/>
               </a>
               <a href={Image6} target='_blank' className='gallery-items'>
                  <img src={Image6} alt='Batman'/>
               </a>
               <a href={Image7} target='_blank' className='gallery-items'>
                  <img src={Image7} alt='Batman'/>
               </a>
               <a href={Image8} target='_blank' className='gallery-items'>
                  <img src={Image8} alt='Batman'/>
               </a>
               <a href={Image9} target='_blank' className='gallery-items'>
                  <img src={Image9} alt='Batman'/>
               </a>
               <a href={Image10} target='_blank' className='gallery-items'>
                  <img src={Image10} alt='Batman'/>
               </a>
               <a href={Image11} target='_blank' className='gallery-items'>
                  <img src={Image11} alt='Batman'/>
               </a>
               <a href={Image12} target='_blank' className='gallery-items'>
                  <img src={Image12} alt='Batman'/>
               </a>
               <a href={Image13} target='_blank' className='gallery-items'>
                  <img src={Image13} alt='Batman'/>
               </a>
               <a href={Image14} target='_blank' className='gallery-items'>
                  <img src={Image14} alt='Batman'/>
               </a>
               <a href={Image15} target='_blank' className='gallery-items'>
                  <img src={Image15} alt='Batman'/>
               </a>
               <a href={Image16} target='_blank' className='gallery-items'>
                  <img src={Image16} alt='Batman'/>
               </a>
            </div>
         </main>
         <div className='footer'></div>
      </div>
      <Footer />
      </>
   )
}

export default Fotos;
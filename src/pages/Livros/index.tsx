import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import * as C from './index.style'
import Button from '../../components/Button/';
import React, {useEffect, useState} from 'react';



export default function Livros() {


  return (
    <div>
      <header>
        <Header />
      </header>
      <C.Container>
        <div className='context'>
          <h1>Nossos Livros</h1>
          <h4>Revamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces. </h4>
          <Button />
        </div>
      </C.Container>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

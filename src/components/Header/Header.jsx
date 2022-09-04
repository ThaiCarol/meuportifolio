import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className= 'header flex flex-col' id= 'header'>
        <Navbar />
        
      <div className='container flex'>
        <div className='header-content'>
          <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>Olá!!</h2>
          <h1 className='text-white fw-6 header-title'>Eu sou <span className='text-brown'>Anne Alaniz</span> autora de romances</h1>
          <p className='text-white fw-6 fs-22'>É um prazer ter você aqui</p>
          <div className='btn-groups flex'>
            <button type='button' className='btn-item bg-brown fw4'>livros publicados</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
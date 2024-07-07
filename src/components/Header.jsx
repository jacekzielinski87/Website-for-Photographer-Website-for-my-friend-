// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-center items-center text-white'>
      <nav>
        <ul className='flex gap-12 font-Lexend font-bold my-12 text-xl'>
        <li><NavLink to ="/">O mnie</NavLink></li>
        <li><NavLink to ="/gallery">Galeria</NavLink></li>
        <li><NavLink to ="/contact">Kontakt</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
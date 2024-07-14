// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-center items-center text-white'>
      <nav className=''>
        <ul className='flex gap-8 font-Lexend font-bold my-12 text-3xl'>
          <li className=' hover hover:bg-gradient-to-r from-violet-500 via-violet-500 to-violet-600 rounded-lg p-2'><NavLink to ="/">O mnie</NavLink></li>
          <li className=' hover hover:bg-gradient-to-r from-violet-500 via-violet-500 to-violet-600 rounded-lg p-2'><NavLink to ="/gallery">Galeria</NavLink></li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;
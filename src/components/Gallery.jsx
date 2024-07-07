// eslint-disable-next-line no-unused-vars
import React from 'react';
import Photo1 from '../assets/photo2.jpg';
import Photo2 from '../assets/photo3.jpg';
import Photo3 from '../assets/Luisa.jpg';
import Header from './Header';


const Gallery = () => {
  
return (
    <>
    <Header/>
    <h2 className='text-4xl text-white items-center justify-center flex py-8 font-LibreFranklin'>Galeria</h2>
    <section className="flex justify-around m-8">
        <img className='border-4 border-slate-300 rounded-xl opacity-75 transition duration-300 ease-in-out hover:opacity-100' src={Photo1}/>
        <img className='border-4 border-slate-300 rounded-xl opacity-75 transition duration-300 ease-in-out hover:opacity-100' src={Photo2}/>
        <img className='border-4 border-slate-300 rounded-xl opacity-75 transition duration-300 ease-in-out hover:opacity-100' src={Photo3}/>
    </section>
    </>
  );
};

export default Gallery;
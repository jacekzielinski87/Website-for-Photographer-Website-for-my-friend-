// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { slides } from '../data';
import Photo1 from '../assets/photo2.jpg';
import Photo2 from '../assets/photo3.jpg';
import Photo3 from '../assets/Luisa.jpg';
import Header from './Header';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';


const Gallery = () => {
  const [open, setOpen] = useState(false);
  
return (
    <>
    <Header/>
    <h2 className='text-4xl text-white items-center justify-center flex py-8 font-LibreFranklin'>Galeria</h2>
    <section className="flex justify-around m-8">
        <img className='border-4 border-slate-300 rounded-xl opacity-55 transition duration-300 ease-in-out hover:opacity-100' src={Photo1}/>
        <img className='border-4 border-slate-300 rounded-xl opacity-55 transition duration-300 ease-in-out hover:opacity-100' src={Photo2}/>
        <img className='border-4 border-slate-300 rounded-xl opacity-55 transition duration-300 ease-in-out hover:opacity-100' src={Photo3}/>
    </section>
    <div className=' flex justify-center m-30'>
    <button onClick={() => setOpen(true)} className=' bg-zinc-800 font-Lexend text-3xl text-white hover hover:bg-zinc-700 border-2 rounded-md p-2'>Sprawdź</button>
      <Lightbox className='h-2/3'
        open = {open}
        slides={slides}
      />
    </div>
    </>
  );
};

export default Gallery;
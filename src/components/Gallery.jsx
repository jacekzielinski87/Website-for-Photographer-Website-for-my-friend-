// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { slides } from '../data';
import Lightbox from 'yet-another-react-lightbox';
import { Captions, Counter } from 'yet-another-react-lightbox/plugins';
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";
import 'yet-another-react-lightbox/styles.css';
import Photo1 from '../assets/photo2.jpg';
import Photo2 from '../assets/photo3.jpg';
import Photo3 from '../assets/Luisa.jpg';
import Header from './Header';



const Gallery = () => {
  const [open, setOpen] = useState(false);
  
return (
    <>
    <Header/>
    <section className="flex justify-around m-8">
      <div>
        <img className='border-4 border-slate-300 rounded-xl opacity-55 transition duration-300 ease-in-out hover:opacity-100' src={Photo1}/>
        <p className='text-white flex justify-center text-2xl'>Uchwyć wspomnienia</p>
      </div>
      <div>
        <img className='border-4 border-slate-300 rounded-xl opacity-55 transition duration-300 ease-in-out hover:opacity-100' src={Photo2}/>
        <p className='text-white flex justify-center text-2xl'>Uchwyć wspomnienia</p>
      </div>
      <div>
        <img className='border-4 border-slate-300 rounded-xl opacity-55 transition duration-300 ease-in-out hover:opacity-100' src={Photo3}/>
        <p className='text-white flex justify-center text-2xl'>Uchwyć wspomnienia</p>
      </div>
    </section>
    <div className='flex justify-center'>
    <button onClick={() => setOpen(true)} className=' bg-zinc-800 font-Lexend text-3xl text-white hover hover:bg-zinc-700 border-2 rounded-md p-4 m-24 flex'>Otwórz galerie</button>
      <Lightbox className='h-screen'
        plugins={[Captions, Counter]}
        captions={{
          showToggle:true,
          descriptionTextAlign:'center',
          }}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        open = {open}
        slides={slides}
        close={() =>setOpen(false)}
      />
    </div>
    </>
  );
};

export default Gallery;
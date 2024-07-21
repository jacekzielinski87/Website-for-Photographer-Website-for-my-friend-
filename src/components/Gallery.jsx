// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { slides } from '../data';
import Lightbox from 'yet-another-react-lightbox';
import { Captions, Counter } from 'yet-another-react-lightbox/plugins';
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";
import 'yet-another-react-lightbox/styles.css';
import Photo2 from '../assets/photo3.jpg';
import Header from './Header';









const Gallery = () => {
  const [open, setOpen] = useState(false);
  
return (
    <>
    <Header/>
    <div className='text-white'>
        <p className='flex justify-center m-6 pb-6 text-3xl font-LibreFranklin'>Zapraszam Cię do sekcji galerii, gdzie ujrzysz efekty mojej pracy</p>
    </div>
    <section className="flex justify-center">
      <div>
        <img className='border-4 border-slate-700 rounded-md opacity-55 transition duration-300 ease-in-out hover:opacity-100' src={Photo2}/>
        <p className='text-white flex justify-center text-3xl m-4 px-10 font-LibreFranklin absolute top-1/2 border border-zinc-800'>Uchwyć wspomnienia</p>
      </div>
    </section>
    <div className='flex justify-center'>
    <button onClick={() => setOpen(true)} className=' bg-zinc-900 font-LibreFranklin text-3xl text-white hover hover:bg-zinc-700 border-2 border-zinc-800 rounded-md p-6 m-14 flex'>Otwórz galerie</button>
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
/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Czarny from "../assets/ManiekNoBg.png";
import Header from './Header';




const About = () => {
  

  return (
    <>
    <Header/>
    <section className='flex items-center justify-center text-white p-4'>
      <p className=' tracking-wide text-2xl p-8 shadow-2xl border-2 border-zinc-900 rounded-md'>Nazywam się Mariusz Piotrowski i z pasją oddaję się fotografii.<br/> Każde zdjęcie to dla mnie opowieść, uchwycenie chwili pełnej emocji i piękna.<br/> Moja przygoda z fotografią dopiero się zaczyna, ale z każdym dniem uczę się czegoś nowego i rozwijam swoje umiejętności, by tworzyć jeszcze lepsze obrazy.<br/>

Specjalizuję się w fotografii rodzinnej, portretowej, ślubnej -  gdzie mogę uchwycić naturalne i spontaniczne momenty, które będą pamiątką na całe życie.<br/> Każda sesja to dla mnie wyjątkowe doświadczenie, pełne kreatywności i radości.<br/>

Zapraszam do obejrzenia mojej galerii, gdzie znajdziesz próbki mojej pracy.<br/> Jeśli podoba Ci się mój styl i chciałbyś, abyśmy razem stworzyli coś wyjątkowego, skontaktuj się ze mną! <br/>Jestem otwarty na różnorodne projekty i pomysły.<br/>
<br/>
<p className='flex justify-end text-3xl'>Razem uchwycimy Twoje najpiękniejsze chwile!</p></p>
      <img src={Czarny} alt='Photo Maniek' className='m-2'/>
    </section>
    <div className='flex justify-center m-12'>
    </div>
    </>
  );
};

export default About;

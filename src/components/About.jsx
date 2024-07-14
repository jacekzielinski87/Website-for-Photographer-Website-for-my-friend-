/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Czarny from "../assets/ManiekNoBg.png";
import Header from './Header';
import ContactForm from './Contactform';
import PrivacyBanner from './PrivacyBanner';




const About = () => {
  

  return (
    <>
    <Header/>
    <section className='flex items-center justify-center text-white shadow-2xl border-2 border-zinc-900 rounded-xl'>
      <p className=' tracking-wide text-2xl px-4 py-6 flex items-start m-16'>Nazywam się Mariusz Piotrowski i z pasją oddaję się fotografii.<br/> Każde zdjęcie to dla mnie opowieść, uchwycenie chwili pełnej emocji i piękna.<br/> 
      Specjalizuję się w fotografii rodzinnej, portretowej, ślubnej.<br/> Każda sesja to dla mnie wyjątkowe doświadczenie, pełne kreatywności i radości.<br/>
      Zapraszam do obejrzenia mojej galerii, gdzie znajdziesz próbki mojej pracy.<br/> Jeśli podoba Ci się mój styl i chciałbyś, abyśmy razem stworzyli coś wyjątkowego, skontaktuj się ze mną! <br/>
      Jestem otwarty na różnorodne projekty i pomysły.<br/>
      <br/>
      Razem uchwycimy Twoje najpiękniejsze chwile!</p>
    <img src={Czarny} alt='Photo Maniek' className=''/>
    </section>
    <ContactForm/>
    <PrivacyBanner/>
  </>
  );
};

export default About;

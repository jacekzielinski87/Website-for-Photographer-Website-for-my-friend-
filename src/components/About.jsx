
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Czarny from "../assets/ManiekNoBg.png";
import Header from './Header';


const About = () => {
  return (
    <>
    <Header/>
    <section className='flex items-center justify-center text-white'>
      <p className='font-Lexend text-3xl'>Jestem fotografem z pasją do uchwycenia niezapomnianych chwil.<br/> Specjalizuję się w fotografii portretowej i krajobrazowej.</p>
      <img src={Czarny} alt='Photo Maniek' className=''/>
    </section>
    </>
  );
};

export default About;

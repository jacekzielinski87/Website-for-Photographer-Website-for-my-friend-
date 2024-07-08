/* eslint-disable no-undef */

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Czarny from "../assets/ManiekNoBg.png";
import Header from './Header';




const About = () => {
  

  return (
    <>
    <Header/>
    <section className='flex items-center justify-center text-white'>
      <p className='font-Lexend text-3xl'></p>
      <img src={Czarny} alt='Photo Maniek' className=''/>
    </section>
    <div className='flex justify-center m-12'>
    </div>
    </>
  );
};

export default About;

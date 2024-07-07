// src/components/ContactForm.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Header from './Header';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <>
    <Header/>
    <section className='text-white p-4'>
      <h2 className='text-3xl font-Lexend mb-2 underline underline-offset-8 flex justify-center'>Kontakt</h2>
      <form onSubmit={handleSubmit} className='flex justify-center items-center gap-4'>
        <label className='font-Lexend'>
          Imię:
          <input className='mx-4'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className='font-Lexend'>
          Email:
          <input className='mx-4'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className=' flex items-center font-Lexend'>
          Wiadomość:
          <textarea className='m-4'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <button type="submit" className= 'bg-green-700 p-2 font-Lexend h-12 w-16 border-solid-green-00'>Wyślij</button>
      </form>
    </section>
    </>
  );
};

export default ContactForm;

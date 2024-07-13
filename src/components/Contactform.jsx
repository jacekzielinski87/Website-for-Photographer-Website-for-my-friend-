// src/components/ContactForm.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


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
    <section className='text-black m-4'>
      <h2 className='text-3xl font-Lexend m-6 flex justify-center'>Zapraszam do kontaktu</h2>
      <form onSubmit={handleSubmit} className='flex items-end justify-around'>
        <label className=' font-Lexend'>
          Imię:
          <input className='mx-2'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className='font-Lexend'>
          Email:
          <input className='mx-2'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className='font-Lexend'>
          Wiadomość:
          <textarea className='mx-2'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <div className=''>
          <button type="submit" className='bg-green-500/90 hover hover:bg-green-400/90 p-2 font-Lexend text-xl w-24 h-14 rounded-lg'>Wyślij</button>
        </div>
      </form>
    </section>
    </>
  );
};

export default ContactForm;

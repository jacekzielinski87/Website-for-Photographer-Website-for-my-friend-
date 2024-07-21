// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: white;
  padding: 15px;
  text-align: center;
  z-index: 1000;
`;

const Button = styled.button`
  background-color: #e0543b;
  border: none;
  color: white;
  padding: 10px 20px;
  margin-left: 20px;
  cursor: pointer;
  font-size: 16px;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 50px;
  right: 85px;
  background-color: #ff6347;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  z-index: 1001;
`;


const PrivacyBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isToggleVisible, setIsToggleVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBannerVisible(false);
      setIsToggleVisible(true);
    }, 8000); // Ukryj baner po 8000 ms (5 sekund)

    return () => clearTimeout(timer); // Wyczyść timer przy odmontowaniu komponentu
  }, []);

  const handleAccept = () => {
    setIsBannerVisible(false);
    setIsToggleVisible(true);
    // Możesz tutaj zapisać do localStorage lub ustawić ciasteczko informujące o akceptacji polityki prywatności
  };

  const handleToggleBanner = () => {
    setIsBannerVisible(true);
    setIsToggleVisible(false);
  };

  return (
    <>
      {isBannerVisible && (
        <BannerWrapper className='bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-800 h-20 rounded-lg text-xl'>
          Ta strona używa plików cookies w celu poprawy doświadczenia użytkownika. 
          Korzystając z naszej strony, zgadzasz się na naszą politykę prywatności.
          <Button onClick={handleAccept} className='rounded-md text-xl'>Akceptuję</Button>
        </BannerWrapper>
      )}
      {isToggleVisible && (
        <ToggleButton onClick={handleToggleBanner} className='rounded-md font-Lexend text-xl hover hover:bg-red-500/90 w-26 h-12 '>
          Pokaż politykę prywatności
        </ToggleButton>
      )}
    </>
  );
};

export default PrivacyBanner;

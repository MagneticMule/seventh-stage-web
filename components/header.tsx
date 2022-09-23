import { url } from 'inspector';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import BackgroundImage from '/images/header/header.svg';
// import Whale from '/images/whale.png';
import LogoImage from '/images/seventh_stage_logo.png';

const HeaderContainer = styled.header`
  background-image: url(${BackgroundImage});
  background-color: rebeccapurple;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .logo {
    margin: 0 4rem 0 4rem;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 900;
    line-height: 1.2;
  }

  .blurb {
    font-weight: 700;
    margin: 0 4rem;
    text-align: center;
    align-content: center;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* <Image src={BackgroundImage} layout='fill' objectFit='cover' alt='' /> */}
      <div className='logo'>
        <Image src={LogoImage} layout='responsive' objectFit='contain' alt='' />
      </div>
      <div className='blurb'>
        <h2>Shall be with you shortly.</h2>
        <a href='mailto:tommy@seventhstage.uk'>tommy@seventhstage.uk</a>
      </div>
    </HeaderContainer>
  );
};

export default Header;

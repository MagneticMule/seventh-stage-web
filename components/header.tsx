import { url } from 'inspector';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/legacy/image';
// import BackgroundImage from '/images/header/header.svg';
import Whale from '/images/whale.png';
import LogoImage from '/images/seventh_stage_logo.png';
import Menu from './menu';
import Link from 'next/link';

const ImageWrapper = styled.span`
  & > span > img {
  }
`;

const HeaderContainer = styled.header`
  background-color: #39003b;
  background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #39003b 300px), repeating-linear-gradient(#2c102c54, #230123);
  background-size: cover;
  overflow: hidden;
  padding: 0 4em;
  margin: 0 auto;
  margin-bottom: 4em;
  color: white;
  /* display: grid; */

  .body {
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    margin: 0 4em 0 12em;
    width: 900px;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 900;
    line-height: 1.2;
  }

  .blurb {
    max-width: 600px;
    padding: 12em 0px;
    /* position: relative; */
    /* top: -460px; */
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.95);
    > h2 {
      z-index: 1;
      font-weight: 900;
      text-transform: uppercase;
      font-size: 3rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.95);
      margin-bottom: 0.5em;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* <ImageWrapper>
        <Image src={BackgroundImage} layout='responsive' object-fit='' alt='' />
      </ImageWrapper> */}
      <Menu />
      <div className='body'>
        <div className='logo'>
          {/* <Image src={Whale} layout='responsive' objectFit='contain' priority alt='Seventh Stage Logo' /> */}
        </div>
        <div className='blurb'>
          <h2>a true partner for your next digital project</h2>
          <p>Creative digital design - expertly engineered.</p>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;

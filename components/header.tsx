import { url } from 'inspector';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import BackgroundImage from '/images/header/header.svg';
import Whale from '/images/whale.png';
import LogoImage from '/images/seventh_stage_logo.png';
import Menu from './menu';
import Link from 'next/link';

const ImageWrapper = styled.span`
  & > span > img {
    background-color: hsla(240, 0%, 100%, 1);
    background-image: radial-gradient(at 12% 60%, hsla(23, 88%, 65%, 1) 0px, transparent 50%), radial-gradient(at 51% 57%, hsla(283, 95%, 79%, 1) 0px, transparent 50%), radial-gradient(at 29% 35%, hsla(279, 83%, 74%, 1) 0px, transparent 50%), radial-gradient(at 5% 2%, hsla(332, 88%, 60%, 1) 0px, transparent 50%), radial-gradient(at 85% 56%, hsla(290, 74%, 63%, 1) 0px, transparent 50%), radial-gradient(at 92% 7%, hsla(248, 73%, 60%, 1) 0px, transparent 50%),
      radial-gradient(at 51% 12%, hsla(289, 100%, 47%, 1) 0px, transparent 50%);
    top: -500px !important;
  }
`;

const HeaderContainer = styled.header`
  /* background-color: #232323; */
  overflow: hidden;
  padding: 0 2em;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  /* background-image: url('/header.svg'); */
  display: grid;
  margin-bottom: -6em;
  /* min-height:100dvh; */

  .logo {
    margin: 0 4em 0 12em;
    max-width: 900px;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 900;
    line-height: 1.2;
  }

  .blurb {
    max-width: 600px;
    position: relative;
    top: -460px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.95);
    > h2 {
      z-index: 1;
      font-weight: 900;
      text-transform: uppercase;
      font-size: 3rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.95);
      margin-bottom: 0.5em;
    }
    > p {
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ImageWrapper>
        <Image src={BackgroundImage} layout='fill' object-fit='cover' alt='' />
      </ImageWrapper>
      <Menu />
      <div className='logo'>
        <Image src={Whale} layout='responsive' objectFit='contain' priority alt='Sevent Stage Logo' />
      </div>
      <div className='blurb'>
        <h2>a true partner for your next digital project</h2>
        <p>Creative digital design - expertly engineered.</p>
      </div>
    </HeaderContainer>
  );
};

export default Header;

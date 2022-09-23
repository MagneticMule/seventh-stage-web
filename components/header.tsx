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
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Image src={BackgroundImage} layout='fill' objectFit='cover' alt='' />
      <div>
        <Image src={LogoImage} layout='fill' objectFit='contain' alt='' />
      </div>
    </HeaderContainer>
  );
};

export default Header;

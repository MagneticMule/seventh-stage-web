import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import LogoImage from '/images/seventh_stage_logo_small.png';
import Background from '/images/headers/header.svg';

const SiteNav = styled.nav`
  z-index: 1;
  padding: 2em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  > ul {
    > li {
      display: inline;
      text-decoration: none;
    }
    > li + li {
      padding-left: 4em;
    }
  }
`;

const Logo = styled.div``;

const Menu = () => {
  return (
    <SiteNav>
      <Logo>
        <Image src={LogoImage} alt='logo' />
      </Logo>
      <ul>
        <li>
          <a href='#'>Case Studies</a>
        </li>
        <li>
          <a href='#'>Little Sites</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </SiteNav>
  );
};

export default Menu;

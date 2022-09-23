import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import LogoImage from '/images/seventh_stage_logo.png';
import Background from '/images/headers/header.svg';

const MenuContainer = styled.div`
  position: sticky;
  z-index: 2;
  color: white;
  width: 100%;
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-items: center;
  justify-content: space-between;
  padding: var(--global-padding);
`;

const SiteNav = styled.nav`
  font-size: 0.8rem;
  text-transform: uppercase;
  align-self: right;
  > ul {
    > li {
      display: inline;
      text-decoration: none;
    }

    > li + li {
      padding-left: 4rem;
    }
  }
`;

const Logo = styled.div``;

const Menu = () => {
  return (
    <MenuContainer>
      <Logo>
        <Image src={LogoImage} alt='logo' width='100%' height='100%' />
      </Logo>
      <SiteNav>
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
    </MenuContainer>
  );
};

export default Menu;

import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.menu`
  width: 100%;
  display: flex;
  align-items: center;
  padding: var(--global-padding);
`;

const Logo = styled.div`
  padding: 10px;
`;

const Menu = () => {
  return (
    <MenuContainer>
      <Logo>LOGO</Logo>
      This is the menu
    </MenuContainer>
  );
};

export default Menu;

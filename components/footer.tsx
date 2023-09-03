import React from 'react';
import styled from 'styled-components';

import Image from "next/legacy/image";

const FooterContainer = styled.footer`
  background-color: #201515;
  color: #dad3d3;
  > .main {
    padding: 4em 0 4em 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    margin: 0 auto;
  }
  > .secondary {
    padding: 2em 0;
    background-color: #111010;
    > p {
      margin: 0 auto;
      max-width: 1200px;
      text-transform: upprecase;
      > span {
        font-weight: bold;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className='main'>
        <div>
          {/* <Image src={Boy} alt='Illustration of a boy harnessing the moon as a balloon - Seventh Stage Logo' /> */}
          <p>You’re not just a client to us, we work with you as part of the team to produce projects we can both be proud of. Some projects are small some big but every project is approached with the same methodological structure.</p>
        </div>
      </div>
      <div className='secondary'>
        <p>
          Copyright &copy; 2023 <span>Seventh Stage Creative Design Co.</span>
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;

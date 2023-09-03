import React from 'react';
import styled from 'styled-components';

import Image, { StaticImageData } from 'next/image';

import BackgroundBlobs from '/images/background-blobs-light.png';
import { Background } from '/images/headers/header.svg';

const ImageWrapper = styled.span`
  background: linear-gradient(180deg, rgba(61, 1, 1, 1) 0, rgba(144, 9, 86, 1) 54.08%, rgba(0, 17, 78, 1) 100%), #c600c6 50% / cover no-repeat;
  padding: 8em;
  position: relative;
  min-height: 50vh;
  & > span > img {
    opacity: 0.3;
  }
`;
const TestimonialContainer = styled.section`
  position: relative;
  display: grid;
  flex-basis: 100%;
  margin: 0 auto;
  margin-bottom: 4em;
  max-width: 1200px;
`;
const Body = styled.p`
  ::before {
    content: open-quote;
  }
  ::after {
    content: close-quote;
  }
  quotes: '“' '”' "'" "'";
  position: relative;
  z-index: 1;
  text-align: right;
  color: #f4e2e2;
  text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.03rem;
  margin-bottom: 2em;
`;
const Name = styled.div`
  position: relative;
  color: #f4ecec;
  text-align: right;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  font-weight: 900;
  line-height: 204.523%;
  letter-spacing: -0.02rem;
  > span {
    ::before {
      content: ' — ';
    }
    color: #ff5d5d;
    font-size: 2rem;
    font-weight: 700;
  }
`;
const Testimonial = (props: { body: String; name: String; business: String; image: StaticImageData }) => {
  return (
    <TestimonialContainer>
      {/* <Image src={BackgroundBlobs} object-fit='cover' layout='fill' alt='' /> */}
      <ImageWrapper>
        <Image layout='fill' objectFit='cover' priority src={props.image} alt='' />
        <Body>{props.body}</Body>
        <Name>
          {props.name} <span>{props.business}</span>
        </Name>
      </ImageWrapper>
    </TestimonialContainer>
  );
};

export default Testimonial;

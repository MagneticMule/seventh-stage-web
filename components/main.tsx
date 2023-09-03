import React from 'react';
import styled from 'styled-components';
import Image from "next/legacy/image";
import Testimonial from './testimonial';

import LogoImage from '/images/seventh_stage_logo_small.png';
import Boy from '../images/balloon-detail.png';

import SectionBlobs from '/images/section-seperator-blobs-light.png';

import AcImage from '/images/partner-logos/arts-council.png';
import UonImage from '/images/partner-logos/uon.png';
import SharpImage from '/images/partner-logos/sharp.png';
import UnescoImage from '/images/partner-logos/unesco.png';
import GcImage from '/images/partner-logos/gamecity.png';
import JiscImage from '/images/partner-logos/jisc.png';

import GymImage from '/images/testimonials/simon-treadmill.jpg';

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto 4em auto;
  padding: 0 2em;
  display: flex;
  flex-wrap: wrap;
  > * {
    /* border: 8px solid black; */
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 50%;
  }
`;

const CopyContainer = styled.div`
  color: #453a3a;
`;
const Intro = styled.p`
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 500;
  line-height: 175%; /* 2.775rem */
  letter-spacing: -0.0075rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 182.023%; /* 2.27531rem */
  letter-spacing: -0.0125rem;

  > span {
    color: #1e2351;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 182.023%;
  }
`;

const Signature = styled.p`
  color: #453a3a;
  text-align: center;
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 700;
  line-height: 185%; /* 1.3875rem */
  letter-spacing: 0.19125rem;
  text-transform: uppercase;
`;

const Heading = styled.div`
  > h4 {
    color: #ff5d5d;
    /* Title Intro */
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.18rem;
    text-transform: uppercase;
    margin-bottom: 0.5em;
  }

  > h3 {
    color: #1e2351;
    font-size: 2rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: -0.045rem;
    text-transform: uppercase;
  }
`;

const Collaborators = styled.div`
  margin-top: 8em;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 100%;
  text-align: center;
  > h3 {
    color: #ff5d5d;
    /* Header 3 */
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.0375rem;
    text-transform: uppercase;
  }
  > p {
    color: #1e2351;
    text-align: center;
    /* Body - Text - Strong */
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 182.023%; /* 2.27531rem */
  }

  > .logos {
    display: flex;
    gap: 2em;
    align-items: center;
    justify-content: center;
    flex-shrink: 1;
  }
`;

const ImageWrapper = styled.span`
  position: relative;
  min-height: 50vh;
`;

const BoyImageContainer = styled.div`
  padding: 1em;
  margin-top: -16em;
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <div className='headings-container'>
          <Heading>
            <h4>Oh Hello There</h4>
            <h3>Different in all the ways that matter...and even a wee bit clever</h3>
          </Heading>
        </div>
        <CopyContainer>
          <Intro>We help you build better relationships with your customers through creative digital design, creating the right connections,setting the right tone, and turning your customers into raving fans.</Intro>
          <Paragraph>You’re not just a client to us, we work with you as part of the team to produce projects we can both be proud of. Some projects are small some big but every project is approached in the same manner. </Paragraph>
          <Paragraph>We want to find out what makes our clients tick, what gets them excited , what is it about you and your business that makes you jump out of bed every morning ready to go out and add more value to your customers lives…</Paragraph>
          <Paragraph>We believe that the more value you give the more will come back to you, putting you in a better position to give even more the next time.</Paragraph>

          <Signature>
            <Image src={LogoImage} alt='logo' />
            <br />
            Tom Sweeney &bull; Ben Pellechia
          </Signature>
        </CopyContainer>
        <Collaborators>
          {/* <ImageWrapper>
            <Image layout='fill' objectFit='cover' src={SectionBlobsUpper} alt='' />
          </ImageWrapper> */}
          <h3>Who we work with</h3>
          <p>
            FROM SMALL BUSINESS TO WORLD LEADERS,
            <br />
            WE BUILD TRUST THROUGH RELIABILITY
          </p>
          <div className='logos'>
            <Image src={AcImage} alt='Arts Council Logo' />
            <Image src={UonImage} alt='University of Nottingham Logo' />
            <Image src={SharpImage} alt='Sharp Logo' />
            <Image src={UnescoImage} alt='Unesco Logo' />
            <Image src={GcImage} alt='GameCity Logo' />
            <Image src={JiscImage} alt='Jisc Logo' />
          </div>
        </Collaborators>
      </MainContainer>
      <Testimonial body={'These guys worked with me to build a clean and clear website that helped drive new customer to my business'} name={'Simon'} business={'Fitness Republic'} image={GymImage} />
      <MainContainer>
        <div className='headings-container'>
          <Heading>
            <h4>What we do</h4>
            <h3>WE BUILD Highly customized solutions to very specific problems.</h3>
          </Heading>
          <Intro>Some that might seem a little complicated and in reality it is, but you don't need to worry about that because we know what we are doing.</Intro>
          <Paragraph>Using this techy stuff we can work with you to develop very exciting things that are phenomenally fast, secure, user friendly and makes your business look awesome. In short anything you've seen on the web from secure websites, web apps and integrated systems that make your sales, tracking and even bookkeeping simpler and efficient. We can build membership sites, next level ecommerce sites, learning platforms. </Paragraph>
          <Paragraph>Pretty much whatever you can imagine.</Paragraph>
          <Paragraph>
            <span>Expect Great Things</span>
          </Paragraph>
        </div>
        <CopyContainer>
          <BoyImageContainer>
            <Image src={Boy} />
          </BoyImageContainer>
        </CopyContainer>
      </MainContainer>
    </>
  );
};

export default Main;

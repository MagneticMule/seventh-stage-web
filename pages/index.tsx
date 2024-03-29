import type { NextPage } from 'next';
import Head from 'next/head';
import Image from "next/legacy/image";

import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
import Main from '../components/main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Seventh Stage - Digital design for education and the arts</title>
        <meta name='description' content='Little design and dev agency wth big ideas ran by Tom Sweeney and collaborators' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* <Menu /> */}
        <Header />
        <Main />
        <Footer />
      </main>
    </>
  );
};

export default Home;

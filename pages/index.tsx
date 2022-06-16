import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seventh Stage - The Web design agency</title>
        <meta
          name='description'
          content='Little design and dev agency wth big ideas. Ran by Ben Pellechia, Tom Sweeney, and Cauley Smith'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>SEVENTH STAGE</h1>
        <h3>Creative Digital Design</h3>

        <p>
          Get started by editing <code className={code}>pages/index.tsx</code>
        </p>

        <div>
          <a href='https://nextjs.org/docs' className={}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href='https://github.com/vercel/next.js/tree/canary/examples' className={}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

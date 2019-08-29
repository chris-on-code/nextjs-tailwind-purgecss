import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import '../assets/styles/main.css';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <div className="h-screen flex items-center text-center justify-center bg-blue-200">
      <div>
        <h1 className="text-5xl text-blue-800">
          🤣 Next + Tailwind + PurgeCSS 👏
        </h1>
      </div>
    </div>
  </>
);

export default Home;

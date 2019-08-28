import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Nav';
import '../assets/styles/main.css';

const Home = () => (
  <div className="bg-red-500">
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className="row">
        <Link href="https://github.com/zeit/next.js#setup">
          <a className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next.js on GitHub and in their examples.</p>
          </a>
        </Link>
        <Link href="https://github.com/zeit/next.js/tree/master/examples">
          <a className="card">
            <h3>Examples &rarr;</h3>
            <p>Find other example boilerplates on the Next.js GitHub.</p>
          </a>
        </Link>
        <Link href="https://github.com/zeit/next.js">
          <a className="card">
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it!</p>
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;

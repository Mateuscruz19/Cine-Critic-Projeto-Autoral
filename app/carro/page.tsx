"use client";

/* eslint-disable react/jsx-key */
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/ui/Header';
import Carousel from '../../components/ui/Carousel/Carousel';

import Image from 'next/image';

import card1 from '../../public/images/jumanji.jpg';
import card2 from '../../public/images/jumanji.jpg';
import card3 from '../../public/images/jumanji.jpg';
import card4 from '../../public/images/jumanji.jpg';

const imagesItems = [
  <Image className="h-full w-full" src={card1} alt="teste" />,
  <Image className="h-full w-full" src={card2} alt="teste" />,
  <Image className="h-full w-full" src={card3} alt="teste" />,
  <Image className="h-full w-full" src={card4} alt="teste" />,
  <Image className="h-full w-full" src={card1} alt="teste" />,
];

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-bg text-white">
      <Head>
        <title>Animated Gradients</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="mb-10 flex flex-col  justify-center space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">Beautiful animated gradients</h1>
          <p className="text-center text-xs opacity-75">
            Explore, generate and use seamless animation gradients for your next projects
          </p>
        </div>
       
      </main>
    </div>
  );
};

export default Home;
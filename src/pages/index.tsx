import Head from 'next/head';
import React from 'react';
import { AboutMePaper } from '../components/AboutMePaper';
import { CareerPaper } from '../components/CareerSection';
import { JobOfferSection } from '../components/JobOfferSection';

export default function Home() {
  return (
    <div
      style={{
        position: 'absolute',
        margin: 0,
        width: '100%',
      }}
    >
      <Head>
        <title>Junk Box</title>
        <link rel="icon" href="/ProfileIcon.jpg" />
      </Head>

      <main className="flex items-center justify-center flex-col w-full	h-full">
        <div className="mt-6"></div>

        <div className="w-11/12 sm:w-8/12 xl:w-7/12">
          <AboutMePaper />
        </div>

        <div className="mt-6"></div>
        <div className="w-full sm:w-9/12 xl:w-7/12">
          <CareerPaper />
        </div>

        {/* TODO: 活動 */}

        <div className="mt-6"></div>

        <div className="w-full sm:w-9/12 xl:w-7/12">
          <JobOfferSection />
        </div>
      </main>

      <div className="my-10"></div>

      <footer></footer>
    </div>
  );
}

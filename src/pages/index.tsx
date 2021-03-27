import Head from 'next/head';
import React from 'react';
import { Wrapper } from '../components/utils/Wrapper';
import { AboutMePaper } from '../components/AboutMePaper';
import { CareerPaper } from '../components/CareerSection';

export default function Home() {
  return (
    <div
      style={{
        position: 'absolute',
        margin: 0,
        height: '100%',
        width: '100%',
      }}
    >
      <Head>
        <title>Junk Box</title>
        <link rel="icon" href="/ProfileIcon.jpg" />
      </Head>

      <main className="flex items-center justify-center flex-col w-full	h-full">
        <Wrapper style={{ width: '56%' }}>
          <AboutMePaper />
        </Wrapper>

        <div className="mt-6"></div>
        <CareerPaper />

        {/* TODO: 活動 */}

        {/* 
          <Wrapper style={{ width: '64%' }}>
            <TopicPaper title="活動"></TopicPaper>
          </Wrapper>

          <Wrapper style={{ width: '64%' }}>
            <TopicPaper title="興味"></TopicPaper>
          </Wrapper>

          <Wrapper style={{ width: '64%' }}>
            <TopicPaper title="転職のお誘い"></TopicPaper>
          </Wrapper> */}
      </main>

      <footer></footer>
    </div>
  );
}

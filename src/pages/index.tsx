import Head from 'next/head';
import React from 'react';
import { TopicPaper } from '../components/TopicPaper';
import { Flexbox } from '../components/utils/Flexbox';
import { Wrapper } from '../components/utils/Wrapper';
import { AboutMePaper } from '../components/AboutMePaper';
import { CareerPaper } from '../components/Career';

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

      <main>
        <Flexbox
          justifyContent="center"
          alignItems="center"
          style={{ flexDirection: 'column', width: '100%', height: '100%' }}
        >
          <Wrapper style={{ width: '56%' }}>
            <AboutMePaper />
          </Wrapper>

          <div className="mt-6"></div>
          <CareerPaper />

          {/* 他のコンポーネントはPaperを使わない */}
          {/* <Wrapper style={{ width: '64%' }}>
            <TopicPaper title="経歴"></TopicPaper>
          </Wrapper>

          <Wrapper style={{ width: '64%' }}>
            <TopicPaper title="活動"></TopicPaper>
          </Wrapper>

          <Wrapper style={{ width: '64%' }}>
            <TopicPaper title="興味"></TopicPaper>
          </Wrapper>

          <Wrapper style={{ width: '64%' }}>
            <TopicPaper title="転職のお誘い"></TopicPaper>
          </Wrapper> */}
        </Flexbox>
      </main>

      <footer></footer>
    </div>
  );
}

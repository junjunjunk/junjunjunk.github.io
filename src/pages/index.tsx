import Head from 'next/head';
import React from 'react';
import { TopicCard } from '../components/TopicCard';
import { Flexbox } from '../components/utils/Flexbox';
import { Wrapper } from '../components/utils/Wrapper';
import { AboutMeCard } from '../components/AboutMeCard';

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
          <Wrapper style={{ width: '64%' }}>
            <AboutMeCard />
          </Wrapper>

          <Wrapper style={{ width: '64%' }}>
            <TopicCard cardTitle="経歴"></TopicCard>
          </Wrapper>

          <Wrapper style={{ width: '64%' }}>
            <TopicCard cardTitle="活動"></TopicCard>
          </Wrapper>

          <Wrapper style={{ width: '64%' }}>
            <TopicCard cardTitle="興味"></TopicCard>
          </Wrapper>

          <Wrapper style={{ width: '64%' }}>
            <TopicCard cardTitle="転職のお誘い"></TopicCard>
          </Wrapper>
        </Flexbox>
      </main>

      <footer></footer>
    </div>
  );
}

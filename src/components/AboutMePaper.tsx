import React from 'react';
import { TopicPaper } from './TopicPaper';
import styled from 'styled-components';
import { Avatar, Chip, IconButton, Link, Typography } from '@material-ui/core';
import { skills } from '../data/skills';

const SizedAvatar = styled(Avatar)`
    width: 128px;
    height 128px;
`;

export const AboutMePaper: React.FC = () => {
  return (
    <TopicPaper title="About Me">
      <div className="flex items-center	justify-center flex-col">
        <div className="p-3 border border-solid rounded-full border-gray-300">
          <SizedAvatar alt="Junk's Icon" src="/ProfileIcon.jpg" />
        </div>
        <Typography
          display="inline"
          variant="h4"
          component="h4"
          className="font-light text-2xl mt-1"
        >
          じゃんく{' '}
          <Typography display="inline" className="text-xl text-gray-500">
            |
          </Typography>{' '}
          Jun Kudo
        </Typography>
        <div className="inline mt-0.5 mb-6">
          <IconButton component={Link} href="https://github.com/junjunjunk" className="p-1">
            <img alt="GitHub" src="/GithubCircleIcon.png" width={32} height={32} />
          </IconButton>
          <IconButton component={Link} href="https://twitter.com/j_nk71" className="p-1">
            <img alt="TwitterCircleIcon" src="/TwitterCircleIcon.svg" width={32} height={32} />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/jun-kudo-3b57101a3/"
            className="p-1"
          >
            <img alt="LinkedIn" src="/LinkedInIcon.png" width={32} height={28} />
          </IconButton>
        </div>
        <div className="w-11/12">
          <Typography variant="inherit">
            東京大学大学院工学系研究科を卒業後、
            <Link href="https://dmm-corp.com/">合同会社DMM.com</Link>にエンジニアとして新卒入社。
            学生時代は<Link href="https://elyza.ai/">株式会社ELYZA</Link>
            にてコンサルティング業務並びに機械学習エンジニア・データサイエンティストとして需要予測システムの開発・構築とWEBアプリケーションの実装に携わる。
            業務とは別にOSS活動を行っており、Pandas等にコントリビュートしている。技術領域気にせず何でもキャッチアップしがちです。ご連絡がある際は{' '}
            <Link href="https://twitter.com/j_nk71">Twitter</Link> もしくは{' '}
            <Link href="https://www.linkedin.com/in/jun-kudo-3b57101a3/">LinkedIn</Link>{' '}
            だと反応しやすいです。気軽につながってください。
          </Typography>
        </div>
        <div className="flex flex-wrap justify-center mt-3">
          {skills.map((data) => {
            return (
              <Chip
                label={data}
                key={data}
                variant="outlined"
                color="default"
                className="text-base text-gray-600"
              />
            );
          })}
        </div>
      </div>
    </TopicPaper>
  );
};

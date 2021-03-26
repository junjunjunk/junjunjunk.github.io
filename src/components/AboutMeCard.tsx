import React from 'react';
import { TopicCard } from './TopicCard';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { Flexbox } from './utils/Flexbox';

interface Props {}

const SizedAvatar = styled(Avatar)`
    width: 160px;
    height 160px;
    border: 2.5px solid #FFFFFF;
    border-color: rgba(0, 0, 0, 0.04);
`;

export const AboutMeCard: React.FC<Props> = ({}) => {
  return (
    <TopicCard cardTitle="About Me">
      <Flexbox justifyContent="center" alignItems="center" style={{ flexDirection: 'column' }}>
        <SizedAvatar alt="Junk's Icon" src="/ProfileIcon.jpg" />
      </Flexbox>
    </TopicCard>
  );
};

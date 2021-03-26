import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Spacer } from './utils/Spacer';

interface Props {
  cardTitle: string;
}

export const TopicCard: React.FC<Props> = ({ cardTitle, children }) => {
  return (
    <Card>
      <CardContent>
        <Typography
          style={{ fontWeight: 200, margin: '4px 8px' }}
          color="primary"
          align="center"
          variant="h3"
          component="h3"
        >
          {cardTitle}
        </Typography>
        <Spacer />
        {children}
      </CardContent>
    </Card>
  );
};

import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { Spacer } from './utils/Spacer';

interface Props {
  title: string;
}

export const TopicPaper: React.FC<Props> = ({ title, children }) => {
  return (
    <Paper className="p-5">
      <Typography
        style={{ fontWeight: 200, margin: '4px 8px' }}
        color="primary"
        align="center"
        variant="h3"
        component="h3"
      >
        {title}
      </Typography>
      <Spacer />
      {children}
    </Paper>
  );
};

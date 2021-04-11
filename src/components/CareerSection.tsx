import { Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import { Career, carees } from '../data/career';
import { primaryPalatte } from '../styles/theme';

// Resouce: https://heroicons.com/
const HashIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-8 m-0 h-8"
      color={primaryPalatte.dark}
    >
      <path
        fillRule="evenodd"
        d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const CareerItem: React.FC<{ career: Career }> = ({ career }) => {
  return (
    <ListItem
      key={career.companyName}
      className="flex flex-wrap justify-center items-center flex-col sm:flex-row"
    >
      <div className="flex flex-nowrap flex-row justify-center items-center sm:w-1/3">
        <ListItemIcon className="min-w-0 mr-2">
          <HashIcon />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            className: 'font-normal text-xl mt-1',
            style: { color: primaryPalatte.dark },
          }}
          primary={career.companyName}
          secondary={`${career.term[0]} ${career.term.length < 2 ? '' : `-${career.term[1]}`} `}
        />
      </div>
      <div className="sm:w-2/3">
        <ListItemText className="">{career.description}</ListItemText>
      </div>
    </ListItem>
  );
};

export const CareerPaper: React.FC = () => {
  return (
    <>
      <Typography
        style={{ fontWeight: 200, margin: '4px 8px' }}
        color="primary"
        align="center"
        variant="h3"
        component="h3"
      >
        経歴
      </Typography>
      <List className="">
        {carees.map((c) => {
          return (
            <>
              <CareerItem career={c} />
              <Divider variant="middle" component="li" />
            </>
          );
        })}
      </List>
    </>
  );
};

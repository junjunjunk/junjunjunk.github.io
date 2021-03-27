import { Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import { carees } from '../data/career';
import { primaryPalatte } from '../styles/theme';

// Resouce: https://heroicons.com/
const HashIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-8 m-0"
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
      <List className="flex items-left justify-center flex-col w-7/12">
        {carees.map((c) => {
          return (
            <>
              <ListItem key={c.companyName}>
                <div className="flex flex-row w-1/3">
                  <ListItemIcon className="min-w-0 mr-2">
                    <HashIcon />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      className: 'font-normal text-xl mt-1',
                      style: { color: primaryPalatte.dark },
                      noWrap: true,
                      align: 'justify',
                    }}
                    primary={c.companyName}
                    secondary={`${c.term[0]} ${c.term.length < 2 ? '' : `-${c.term[1]}`} `}
                  />
                </div>
                <ListItemText className="w-2/3">{c.description}</ListItemText>
              </ListItem>
              <Divider variant="middle" component="li" />
            </>
          );
        })}
      </List>
    </>
  );
};

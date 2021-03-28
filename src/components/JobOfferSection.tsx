import { List, ListItem, ListItemText, Typography, Chip } from '@material-ui/core';
import React from 'react';
import { interestedBusiness, interestedTechnology, interestedCulture } from '../data/interest';
const TopicTitle: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className="flex justify-center items-center w-full sm:items-center flex-col sm:w-1/3">
      <Typography color="textSecondary" variant="h5" className="underline">
        {title}
      </Typography>
      <div className="flex justify-center items-start sm:items-center w-full flex-col">
        {children}
      </div>
    </div>
  );
};

export const JobOfferSection: React.FC = () => {
  return (
    <>
      <Typography
        style={{ fontWeight: 200, margin: '4px 8px' }}
        color="primary"
        align="center"
        variant="h3"
        component="h3"
      >
        転職・仕事関係
      </Typography>
      <div className="flex justify-center items-center flex-col" style={{ padding: '8px 16px' }}>
        <Typography color="secondary" variant="body1" className="inline">
          常時問い合わせは受け付けています。
        </Typography>
        <Typography color="secondary" variant="body1" gutterBottom>
          なお、人材紹介業の方からのご連絡はお断りしています。
        </Typography>
        <Typography color="textPrimary" variant="h5" className="mt-6 mb-4">
          興味・関心
        </Typography>
        <div className="flex flex-wrap justify-center items-center sm:items-start flex-col sm:flex-row w-11/12">
          <TopicTitle title={'事業'}>
            <List>
              {interestedBusiness.map((data) => {
                return (
                  <ListItem key={data}>
                    <ListItemText>{data}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </TopicTitle>

          <TopicTitle title={'文化'}>
            <List>
              {interestedCulture.map((data) => {
                return (
                  <ListItem key={data}>
                    <ListItemText>{data}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </TopicTitle>
          <TopicTitle title={'技術'}>
            <div className="flex flex-wrap justify-center mt-4">
              {interestedTechnology.map((data) => {
                return (
                  <Chip
                    label={data}
                    key={data}
                    variant="outlined"
                    color="default"
                    className="text-base"
                  />
                );
              })}
            </div>
          </TopicTitle>
        </div>
      </div>
    </>
  );
};

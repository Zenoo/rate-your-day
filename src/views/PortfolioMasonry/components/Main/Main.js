import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import Column from './Column';

const mockLeftGrid = [
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img8.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    title: 'Lorem ipsum dolor sit amet,',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
    description: 'Excepteur sint occaecat cupidatat non proident',
    title: 'Consectetur adipiscing elit',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img12.jpg',
    description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    title: 'Labore et dolore magna aliqua',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img11.jpg',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    title: 'Eiusmod tempor incididunt',
  },
];

const mockMiddleGrid = [
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img11.jpg',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
    title: 'Sed ut perspiciatis',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img12.jpg',
    description:
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Unde omnis iste natus',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
    description:
      'On the other hand, we denounce with righteous indignation and dislike',
    title: 'Sit voluptatem',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img8.jpg',
    description: 'Quos dolores et quas molestias excepturi',
    title: 'Accusantium doloremque',
  },
];

const mockRightGrid = [
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img12.jpg',
    description: 'Et harum quidem rerum facilis est et expedita distinctio',
    title: 'Totam rem aperiam',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img11.jpg',
    description: 'Nam libero tempore, cum soluta nobis est eligendi optio',
    title: 'Uae ab illo inventore',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img8.jpg',
    description: 'Itaque earum rerum hic tenetur a sapiente delectus',
    title: 'Beatae vitae dicta',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
    description:
      'On the other hand, we denounce with righteous indignation and dislike',
    title: 'Nemo enim ipsam',
  },
];

const Main = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Column data={mockLeftGrid} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column data={mockMiddleGrid} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column data={mockRightGrid} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;

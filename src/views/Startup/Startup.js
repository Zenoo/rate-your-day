import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from 'components/Container';
import Main from 'layouts/Main';
import React from 'react';
import { Features, Hero, Partners, Process, Reviews, Team, Work } from './components';

const Startup = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Box bgcolor={'primary.main'}>
        <Container paddingX={'0 !important'} maxWidth={1}>
          <Partners />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
      <Container>
        <Process />
      </Container>
      <Container>
        <Work />
      </Container>
      <Divider />
      <Container>
        <Reviews />
      </Container>
      <Divider />
      <Container>
        <Team />
      </Container>
    </Main>
  );
};

export default Startup;

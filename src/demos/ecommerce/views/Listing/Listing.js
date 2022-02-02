import Box from '@mui/material/Box';
import Container from 'components/Container';
import React from 'react';
import Main from '../../layouts/Main';
import { Banner, Headline, Newsletter, Partners, Products, SidebarFilters } from './components';

const Listing = () => {
  return (
    <Main>
      <Box bgcolor={'alternate.main'}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline />
        </Container>
      </Box>
      <Container paddingBottom={'0 !important'}>
        <Banner />
      </Container>
      <Container>
        <SidebarFilters>
          <Products />
        </SidebarFilters>
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Newsletter />
        </Container>
      </Box>
      <Container>
        <Partners />
      </Container>
    </Main>
  );
};

export default Listing;

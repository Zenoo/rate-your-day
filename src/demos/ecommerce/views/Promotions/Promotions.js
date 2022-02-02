import Box from '@mui/material/Box';
import Container from 'components/Container';
import React, { useCallback, useEffect, useState } from 'react';
import Main from '../../layouts/Main';
import { Banner, Filters, Headline, Newsletter, Partners, Products, PromoPopup } from './components';

const Promotions = () => {
  const [popupClosed, setPopupClosed] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!popupClosed) {
      setTimeout(() => setOpen(true), 3000);
    }
  }, [popupClosed]);

  const handleClose = useCallback(() => {
    setPopupClosed(true);
    setOpen(false);
  }, []);
  return (
    <Main>
      <PromoPopup open={open} onClose={handleClose} />
      <Box bgcolor={'alternate.main'}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline />
        </Container>
      </Box>
      <Container>
        <Filters>
          <Products />
        </Filters>
      </Container>
      <Banner />
      <Container>
        <Newsletter />
      </Container>
      <Container paddingTop={'0 !important'}>
        <Partners />
      </Container>
    </Main>
  );
};

export default Promotions;

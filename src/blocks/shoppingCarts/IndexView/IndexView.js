import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import Fluid from 'layouts/Fluid';
import Container from 'components/Container';
import ResizableFrame from 'components/ResizableFrame';

const IndexView = () => {
  return (
    <Fluid>
      <Box bgcolor={'alternate.main'}>
        <Container maxWidth={1500} paddingBottom={'16px !important'}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/blocks">
              Components
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/blocks#js--blocks__index-section--e-commerce"
            >
              E-commerce
            </Link>
            <Typography color="text.primary">Shopping Carts</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Shopping Carts
            </Typography>
            <Typography>
              Used to display products added to the store shopping cart.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/shopping-carts/cart-with-order-summery'}
          title={'Cart with order summary box'}
          path={
            './src/blocks/shoppingCarts/CartWithOrderSummery/CartWithOrderSummery.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/shopping-carts/empty-cart'}
          title={'Empty cart'}
          path={'./src/blocks/shoppingCarts/EmptyCart/EmptyCart.js|ts'}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
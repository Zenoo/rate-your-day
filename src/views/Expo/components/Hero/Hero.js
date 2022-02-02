/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import Container from '../../../../components/Container';
import Form from './Form';



const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        marginTop: -13,
        paddingTop: 13,
        backgroundColor: theme.palette.alternate.main,
        background:
          'url(https://assets.maccarianagency.com/backgrounds/img19.jpg) no-repeat center',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 74%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <Box marginBottom={4} data-aos="fade-up">
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 900,
                    color: 'common.white',
                  }}
                >
                  Join the world's leading companies at theFront 2021
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="text.primary"
                  sx={{
                    fontWeight: 500,
                    color: 'common.white',
                  }}
                >
                  Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something
                  about TheFront works for our global partners.
                  <br />
                  Want more information? Download our overview and a member of our
                  specialist team will be in touch to talk about your goals for TheFront
                  2021.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <Form />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;

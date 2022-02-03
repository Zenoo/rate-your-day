import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from 'components/Container';
import Image from 'components/Image';
import Main from 'layouts/Main';
import React from 'react';


const SigninSimple = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
      >
        <Container>
          <Grid container spacing={6}>
            {isMd ? (
              <Grid item container justifyContent={'center'} xs={12} md={6}>
                <Box height={1} width={1} maxWidth={500}>
                  <Image
                    alt="Coming soon"
                    src="working.svg"
                    sx={{
                      width: 1,
                      height: 1,
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.8)'
                          : 'none',
                    }}
                  />
                </Box>
              </Grid>
            ) : null}
            <Grid
              item
              container
              alignItems={'center'}
              justifyContent={'center'}
              xs={12}
              md={6}
            >
              <Box marginBottom={4}>
                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'medium',
                  }}
                  gutterBottom
                  color={'text.secondary'}
                >
                  Coming soon
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Rate your day
                </Typography>
                <Typography color="text.secondary">
                  Keep track of how your year went.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default SigninSimple;

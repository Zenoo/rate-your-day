import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useCallback, useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const mock = [
  {
    title: 300,
    subtitle:
      '300 + component compositions, which will help you to build any page easily.',
    suffix: '+',
  },
  {
    title: 45,
    subtitle:
      '45 + landing and supported pages to Build a professional website.',
    suffix: '+',
  },
  {
    title: 99,
    subtitle: '99% of our customers rated 5-star our themes over 5 years.',
    suffix: '%',
  },
];

const LeftSide = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = useCallback((isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  }, [viewPortEntered]);

  return (
    <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'secondary'}
      >
        Scale
      </Typography>
      <Box marginBottom={2}>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
          Flexible office space means growing your team is easy.
        </Typography>
        <Typography color="text.secondary">
          Rather than worrying about switching offices every couple years, you
          can instead stay in the same location and grow-up from your shared
          coworking space to an office that takes up an entire floor.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12} md={4}>
            <Typography variant="h3" gutterBottom>
              <Box fontWeight={600}>
                <VisibilitySensor
                  onChange={setViewPortVisibility}
                  delayedCall
                >
                  <CountUp
                    duration={2}
                    end={viewPortEntered ? item.title : 0}
                    start={0}
                    suffix={item.suffix}
                  />
                </VisibilitySensor>
              </Box>
            </Typography>
            <Typography color="text.secondary" component="p">
              {item.subtitle}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LeftSide;
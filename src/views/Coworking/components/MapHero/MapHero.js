import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import React from 'react';
import LeftSide from './LeftSide';



const MapHero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="map"
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Milan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                    style={{
                      minHeight: 300,
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'grayscale(0.5) opacity(0.7)'
                          : 'none',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default MapHero;

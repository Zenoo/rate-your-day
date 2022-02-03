import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from 'components/Container';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import pages from '../navigation';
import { Footer, Sidebar, Topbar } from './components';
import { Link } from 'react-router-dom';
import Image from 'components/Image';

const Main = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
  const theme = useTheme();
  const { palette: { mode } } = theme;
  // TODO
  const loggedIn = false;

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = useCallback(() => {
    setOpenSidebar(true);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setOpenSidebar(false);
  }, []);

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          {loggedIn ? (
            <Topbar
              onSidebarOpen={handleSidebarOpen}
              pages={pages}
              colorInvert={trigger ? false : colorInvert}
            />
          ) : (
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={1}
            >
              <Box
                display={'flex'}
                component={Link}
                to="/"
                title="Rate your day"
                width={{ xs: 100, md: 120 }}
              >
                <Image alt={'Rate your day'} src={mode === 'light' ? 'logo-dark.png' : 'logo-white.png'} sx={{ height: 40, width: 1 }} />
              </Box>
            </Box>
          )}
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Main;

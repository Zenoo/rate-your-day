import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Fab from '@mui/material/Fab';
import NoSsr from '@mui/material/NoSsr';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import React, { useCallback } from 'react';
import Container from '../../components/Container';
import Main from '../../layouts/Main/Main';
import { Hero, OverviewSection } from './components';
import data from './data';




const IndexView = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  const { application, marketing, ecommerce } = data;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollTo = useCallback((id) => () => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  }, []);

  return (
    <Box id="js--blocks__index">
      <Main>
        <Box>
          <Container>
            <Hero />
          </Container>
          <Container paddingY={'0 !important'}>
            <ButtonGroup
              size="large"
              orientation={isSm ? 'horizontal' : 'vertical'}
              fullWidth={!isSm}
            >
              <Button
                size={'large'}
                onClick={scrollTo('js--blocks__index-section--marketing')}
              >
                Marketing
              </Button>
              <Button
                size={'large'}
                onClick={scrollTo('js--blocks__index-section--application-ui')}
              >
                Application UI
              </Button>
              <Button
                size={'large'}
                onClick={scrollTo('js--blocks__index-section--e-commerce')}
              >
                E-commerce
              </Button>
            </ButtonGroup>
          </Container>
          <Container id="js--blocks__index-section--marketing">
            <OverviewSection
              title={'Marketing'}
              description={
                'Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.'
              }
              items={marketing}
            />
          </Container>
          <Container id="js--blocks__index-section--application-ui">
            <OverviewSection
              title={'Application UI'}
              description={
                'Form layouts, tables, modal windows — everything you need to build beautiful responsive web applications.'
              }
              items={application}
            />
          </Container>
          <Container id="js--blocks__index-section--e-commerce">
            <OverviewSection
              title={'E-commerce'}
              description={
                'E-commerce sections — everything you need to build beautiful e-commerce websites and shop applications.'
              }
              items={ecommerce}
            />
          </Container>
          <NoSsr>
            <Zoom in={trigger}>
              <Box
                onClick={scrollTo('js--blocks__index')}
                role="presentation"
                sx={{ position: 'fixed', bottom: 24, right: 32 }}
              >
                <Fab
                  color="primary"
                  size="small"
                  aria-label="scroll back to top"
                >
                  <KeyboardArrowUpIcon />
                </Fab>
              </Box>
            </Zoom>
          </NoSsr>
        </Box>
      </Main>
    </Box>
  );
};

export default IndexView;

import React, { useCallback } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

import Container from 'components/Container';
import Alert from './components/Alert';

const MUIStandardSnackBars = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback((e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }, []);

  return (
    <Container>
      <Stack spacing={4} sx={{ width: 1 }}>
        <Button variant="outlined" onClick={handleClick}>
          Click to open success snackbar
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: 1 }}>
            This is a success message!
          </Alert>
        </Snackbar>
        <Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert>
      </Stack>
    </Container>
  );
};

export default MUIStandardSnackBars;

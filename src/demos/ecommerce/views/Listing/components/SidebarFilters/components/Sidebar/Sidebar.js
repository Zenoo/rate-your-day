import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { FilterBrand, FilterCategory, FilterColor, FilterGender, FilterPrice, FilterSize } from './components';


const Sidebar = ({ open, variant, onClose }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Drawer
      anchor="left"
      onClose={handleClose}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          position: 'relative',
          width: '100%',
          maxWidth: { xs: 300, md: 260 },
          minWidth: { xs: 300, md: 260 },
          border: 0,
          zIndex: 1100,
        },
      }}
    >
      <Box paddingY={{ xs: 2, md: 1 }} paddingX={{ xs: 2, md: 0 }}>
        <FilterPrice />
        <Divider sx={{ my: 3 }} />
        <FilterCategory />
        <Divider sx={{ my: 3 }} />
        <FilterGender />
        <Divider sx={{ my: 3 }} />
        <FilterBrand />
        <Divider sx={{ my: 3 }} />
        <FilterSize />
        <Divider sx={{ my: 3 }} />
        <FilterColor />
        <Button variant={'outlined'} size={'large'} fullWidth sx={{ mt: 3 }}>
          Reset all
        </Button>
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;

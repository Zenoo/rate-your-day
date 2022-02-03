import React from 'react';
import PropsTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const BlockItem = ({ versionTitle, date, list }) => (
  <Box>
    <Typography variant="h4" component="h4" sx={{ fontWeight: 700 }}>
      {versionTitle}
    </Typography>
    <Typography
      variant="body2"
      component="p"
      color="text.secondary"
      sx={{
        marginTop: 1,
        marginBottom: 2,
        fontWeight: 700,
      }}
    >
      {date}
    </Typography>
    <ul>
      {list.map((item, i) => (
        <Box component={'li'} key={i} marginY={1 / 2} marginX={0}>
          <Typography variant="body1" component="p">
            {item}
          </Typography>
        </Box>
      ))}
    </ul>
  </Box>
);

BlockItem.propTypes = {
  versionTitle: PropsTypes.string.isRequired,
  date: PropsTypes.string.isRequired,
  list: PropsTypes.array.isRequired,
};

export default BlockItem;
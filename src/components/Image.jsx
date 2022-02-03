import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

/**
 * Image component
 * @param {Object} props
 * @param {String} props.src Image source (without /static/images/)
 * @param {String} props.alt Image alt
 * @param {React.MouseEventHandler} [props.onClick] Image onClick handler
 * @returns
 */
const Image = ({
  src,
  alt,
  ...rest
}) => {
  const { groups: { extension } } = src.match(/\.(?<extension>[^/.]+)$/);
  return (
    <picture>
      {extension !== 'svg' && (
        <source
          srcSet={`/rate-your-day/images/webp/${src.replace(/\.[^/.]+$/, '')}.webp`}
          type="image/webp"
        />
      )}
      <source
        srcSet={`/rate-your-day/images/${src}`}
        type={`image/${extension === 'jpg' ? 'jpeg' : extension}`}
      />
      <Box alt={alt} component="img" src={`/rate-your-day/images/${src}`} {...rest} />
    </picture>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  sx: PropTypes.object
};

Image.defaultProps = {
  sx: null
};

export default Image;

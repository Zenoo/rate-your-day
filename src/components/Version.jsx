import React from 'react';

/**
 * Version component
 * @param {Object} props 
 * @returns 
 */
const Version = (props) => {
  return <span {...props}>{'v0.1.3'}</span>;
};

Version.propTypes = {};

export default Version;
import React from 'react';
import style from './Heading.module.css';
import PropTypes from 'prop-types';

export const Heading = ({ text }) => {
  return <div className={style.heading}> {text}</div>;
};

Heading.propTypes = {
  text: PropTypes.string,
};

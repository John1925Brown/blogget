import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';

import Photo from './Photo';
import Content from './Content';
import Rating from './Rating';
import Time from './Time';
import Delete from './Delete';

export const Post = ({ postData }) => {
  const { title, author, ups, date } = postData;
  return (
    <li className={style.post}>
      <Photo title={title} />
      <Content title={title} author={author} />
      <Rating ups={ups} />
      <Time date={date} />
      <Delete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};

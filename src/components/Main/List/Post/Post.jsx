import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';

import Photo from './Photo';
import Content from './Content';
import Rating from './Rating';
import Time from './Time';
import Delete from './Delete';

export const Post = ({ postData }) => {
  const {
    title,
    author,
    ups,
    date,
    thumbnail,
    selftext: markdown,
    id,
  } = postData;

  return (
    <li className={style.post}>
      <Photo thumbnail={thumbnail} />
      <Content title={title} author={author} markdown={markdown} id={id} />
      <Rating ups={ups} />
      <Time date={date} />
      <Delete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};

import React from 'react';
import style from './Photo.module.css';
import notphoto from './img/notphoto.jpg';

export const Photo = (thumbnail) => (
  <img
    className={style.img}
    src={!thumbnail.thumbnail ? notphoto : thumbnail.thumbnail}
    alt={thumbnail.title}
  />
);

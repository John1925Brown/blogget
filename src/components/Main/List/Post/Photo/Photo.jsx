import React from 'react';
import style from './Photo.module.css';
import notphoto from './img/notphoto.jpg';

export const Photo = (title) => (
  <img className={style.img} src={notphoto} alt={title} />
);

import React from 'react';
import style from './Delete.module.css';
import { ReactComponent as Icon } from './img/delete.svg';

export const Delete = () => (
  <button className={style.delete}>
    <Icon />
  </button>
);

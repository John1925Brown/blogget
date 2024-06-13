import React from 'react';
import style from './Tabs.module.css';

export const Tabs = (props) => {
  console.log(style);
  return (
    <ul className={style.list}>
      <li href="/">
        <a>Главная</a>
      </li>
      <li href="/">
        <a>Просмотренные</a>
      </li>
      <li href="/">
        <a>Сохраненные</a>
      </li>
      <li href="/">
        <a>Мои посты</a>
      </li>
    </ul>
  );
};

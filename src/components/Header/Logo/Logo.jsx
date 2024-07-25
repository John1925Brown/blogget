import React from 'react';
import style from './Logo.module.css';
import { ReactComponent as Icon } from './img/logo.svg';

export const Logo = () => {
  const token = localStorage.getItem('bearer');
  return (
    <a className={style.link} href={`#access_token=${token}`}>
      <Icon className={style.logo} alt="Logo Blogget" />
    </a>
  );
};

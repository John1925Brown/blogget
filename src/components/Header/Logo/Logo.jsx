import React from 'react';
import style from './Logo.module.css';
import { ReactComponent as Icon } from './img/logo.svg';

export const Logo = () => {
  return (
    <a className={style.link} href="/">
      <Icon className={style.logo} alt="Logo Blogget" />
    </a>
  );
};

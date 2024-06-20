import React from 'react';
import style from './Logout.module.css';

export const Logout = () => {
  return (
    <button
      className={style.logout}
      onClick={() => {
        console.log(1);
      }}
    >
      Выйти
    </button>
  );
};

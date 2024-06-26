import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Heading from './Heading';
import Search from './Search';
import Auth from './Auth';
import PropTypes from 'prop-types';

export const Header = ({ token, delToken, checkResponse }) => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text="Главная" />
          <Search />
          <Auth
            token={token}
            delToken={delToken}
            checkResponse={checkResponse}
          />
        </div>
      </Layout>
    </header>
  );
};

Header.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
  checkResponse: PropTypes.func,
};

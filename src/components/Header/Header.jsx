import React from "react";
import style from "./Header.module.css";
import Layout from "../Layout";
import Logo from "./Logo";
import Search from "./Search";
import Auth from "./Auth";

const styleTitle = {
  order: '1',
  gridColumn: "1/4",
  textAlign: "center",
  fontSize: "22px",
};

export const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <h1 style={styleTitle}>Title</h1>
          <Search />
          <Auth auth='Dima' />
        </div>
      </Layout>
    </header>
  );
};

import React from 'react';
import styles from './HomePageHeader.module.scss'
import logo from "../Assets/logo-white.png";
import { Link } from "react-router-dom";
import { WhiteButtonAnimated } from '../../../Utilities/Button/Button';

const HomePageHeader = () => {

    return (
      <header className={styles.header}>
        <div className={styles.header__logo_box}>
          <img className={styles.header__logo} src={logo} alt="" />
        </div>
        <div className={styles.header__text_box}>
          <h1 className={styles.heading__primary}>
            <span className={styles.heading__primary__main}>Outdoors</span>
            <span className={styles.heading__primary__sub}>
              is where life happens
            </span>
          </h1>
          <Link to="/trillo/hotel">
            <WhiteButtonAnimated>Discover Our Tours</WhiteButtonAnimated>
          </Link>
        </div>
      </header>
    );
}

export default HomePageHeader;
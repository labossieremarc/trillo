import React from 'react';
import styles from "./HomePageComponents.module.scss";
import logo from "../../../Assets/logo-white.png";
import { Link } from "react-router-dom";
import { ButtonAnimated } from '../../../Utilities/Button/Button';

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
          <a href="#section-tours">
            <ButtonAnimated animated={true}>Discover Our Tours</ButtonAnimated>
          </a>
        </div>
      </header>
    );
}

export default HomePageHeader;
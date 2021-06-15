import React from "react";
import styles from "./HomePageNav.module.scss";

const HomePageNav = () => {
  return (
    <div className={styles.navigation}>
      <input
        type="checkbox"
        className={styles.navigation__checkbox}
        id="nav-toggle"
      />
      <label htmlFor="nav-toggle" className={styles.navigation__button}>
        <span className={styles.navigation__icon}></span>
        
      </label>
      <div className={styles.navigation__background}></div>

      <nav className={styles.navigation__nav}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>01</span>About Natours
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>02</span>Your benifits
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>03</span>Popular tours
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>04</span>Stories
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>05</span>Book Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePageNav;

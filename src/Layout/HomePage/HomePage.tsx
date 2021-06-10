import React from "react";
import { Fragment } from "react";

import styles from "./HomePage.module.scss";
import HomePageHeader from "./HomePageComponents/HomePageHeader";


const HomePage = () => {
  return (
    <section className={styles.main}>
      <HomePageHeader />
      <main>
        <section className={styles.section__about}>
          <h2 className={styles.heading__secondary}>Exciting tours for adventurous people</h2>
        </section>
      </main>
    </section>
  );
};

export default HomePage;

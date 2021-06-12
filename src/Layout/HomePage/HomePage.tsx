import React from "react";
import styles from "./HomePage.module.scss";
import HomePageAbout from "./HomePageComponents/HomePageAbout";
import HomePageFeatures from "./HomePageComponents/HomePageFeatures";
import HomePageHeader from "./HomePageComponents/HomePageHeader";
import HomePagePopularTours from "./HomePageComponents/HomePagePopularTours";
import HomePageStories from "./HomePageComponents/HomePageStories";


const HomePage = () => {
  return (
    <section className={styles.main}>
      <HomePageHeader />
      <main>
        <HomePageAbout />
        <HomePageFeatures />
        <HomePagePopularTours />
        <HomePageStories/>
      </main>
    </section>
  );
};

export default HomePage;

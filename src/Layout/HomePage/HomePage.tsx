import React from "react";
import StoryModal from "../../Utilities/StoryModal/StoryModal";
import styles from "./HomePage.module.scss";
import HomePageAbout from "./HomePageComponents/HomePageAbout";
import HomePageBook from "./HomePageComponents/HomePageBook";
import HomePageFeatures from "./HomePageComponents/HomePageFeatures";
import HomePageFooter from "./HomePageComponents/HomePageFooter";
import HomePageHeader from "./HomePageComponents/HomePageHeader";
import HomePageNav from "./HomePageComponents/HomePageNav/HomePageNav";
import HomePagePopularTours from "./HomePageComponents/HomePagePopularTours";
import HomePageStories from "./HomePageComponents/HomePageStories";


const HomePage = () => {
  return (
    <section className={styles.main}>
      <HomePageNav/>
      <HomePageHeader />
      <main>
        <HomePageAbout />
        <HomePageFeatures />
        <HomePagePopularTours />
        <HomePageStories />
        <HomePageBook />
        <HomePageFooter />
        <StoryModal/>
      </main>
    </section>
  );
};

export default HomePage;

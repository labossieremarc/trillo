import React from "react";
import StoryCard from "../../../Utilities/StoryCard/StoryCard";
import styles from "./HomePageComponents.module.scss";
import { tourStories } from "../../../DummyData/DummyData";
import { UnderlineButton } from "../../../Utilities/Button/Button";

const HomePageStories = () => {
  return (
    <section className={styles.stories}>
      <div className={styles.bgvideo}>
        <video className={styles.bgvideo__content} autoPlay muted loop>
          <source src="/img/video.mp4" type="video/mp4" />
          <source src="/img/video.webm" type="video/webm" />
          Your browser is not supported
        </video>
      </div>
      <div className={styles.stories__center}>
        <h2 className={styles.heading__secondary}>
          We make people genuinely happy
        </h2>
      </div>
      <div className={styles.stories__container}>
        <StoryCard story={tourStories[0]} />
        <StoryCard story={tourStories[1]} />
      </div>
      <div className={styles.stories__button}>
        <UnderlineButton>
          See all Stories<span>{String.fromCharCode(187)}</span>
        </UnderlineButton>
      </div>
    </section>
  );
};

export default HomePageStories;

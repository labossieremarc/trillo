import React from 'react';
import StoryCard from '../../../Utilities/StoryCard/StoryCard';
import styles from "./HomePageComponents.module.scss";
import {tourStories} from '../../../DummyData/DummyData'

const HomePageStories = () => {


    return (
      <section className={styles.stories}>
        <div className={styles.centerstories}>
          <h2 className={styles.heading__secondary}>
            We make people genuinely happy
          </h2>
        </div>
            <StoryCard story={tourStories[0]}/>
            <StoryCard story={tourStories[1]}/>
      </section>
    );
}

export default HomePageStories;
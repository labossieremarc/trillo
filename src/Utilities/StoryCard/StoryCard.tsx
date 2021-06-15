import React from "react";
import styles from "./StoryCard.module.scss";
import { Story } from '../../DummyData/DummyData'

interface Props {
    story: Story
}
const StoryCard = ({story} : Props) => {
  return (
    <div className={styles.stories__row}>
      <div className={styles.story}>
              <figure className={styles.story__shape}>
                  <img className={styles.story__image} src={story.image} alt="person"></img>
                  <figcaption className={styles.story__caption}>{story.name}</figcaption>
        </figure>
        <div className={styles.text}>
          <h3 className={`${styles.heading__tertiary} ${styles.heading}`}>
            {story.heading}
          </h3>
          <p className={styles.content}>
           {story.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;

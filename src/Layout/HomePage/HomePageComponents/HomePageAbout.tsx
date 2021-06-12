import React from "react";
import { UnderlineButton } from "../../../Utilities/Button/Button";
import styles from "./HomePageComponents.module.scss";
import nat1 from "../../../Assets/nat-1-large.jpg";
import nat2 from "../../../Assets/nat-2-large.jpg";
import nat3 from "../../../Assets/nat-3-large.jpg";
import CompositionPhoto from "../../../Utilities/Composition Photo/CompositionPhoto";

const HomePageAbout = () => {
  return (
    <section className={styles.section__about}>
      <div className={`${styles.u_center_text} ${styles.u_margin_bottom_big}`}>
        <h2 className={styles.heading__secondary}>
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className={styles.section__content}>
        <div className={styles.section__text}>
          <h3
            className={`${styles.heading__tertiary} ${styles.u_margin_bottom_small}`}
          >
            You're going to fall in love with nature
          </h3>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            consequatur asperiores, quae porro alias exercitationem labore
            beatae odit tempore, quas voluptatem repellat magnam minima dolorem.
            Assumenda aspernatur perspiciatis ipsum ratione.
          </p>
          <h3
            className={`${styles.heading__tertiary} ${styles.u_margin_bottom_small}`}
          >
            Live Adventures like you never have before
          </h3>
          <p className={styles.paragraph}>
            Amet consectetur adipisicing elit. Dolore consequatur asperiores,
            quae porro alias exercitationem ...
          </p>
          <div>
            <UnderlineButton>
              Learn More <span>{String.fromCharCode(187)}</span>
            </UnderlineButton>
          </div>
        </div>
        <div className={styles.section__image}>
          <CompositionPhoto image1={nat1} image2={nat2} image3={nat3} />
        </div>
      </div>
    </section>
  );
};

export default HomePageAbout;

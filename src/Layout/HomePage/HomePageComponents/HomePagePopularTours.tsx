import React from "react";
import styles from "./HomePageComponents.module.scss";
import { popularTours } from "../../../DummyData/DummyData";
import FlipCard from "../../../Utilities/FlipCard/FlipCard";
import { ButtonAnimated } from "../../../Utilities/Button/Button";
import { Link } from 'react-router-dom';

const HomePagePopularTours = () => {
  return (
    <section className={styles.popular}>
      <div className={styles.popular__header}>
        <h2 className={styles.heading__secondary}>Most Popular Tours</h2>
      </div>
      <div className={styles.popular__row}>
        {popularTours.map((value, key) => (
          <FlipCard key={key} tours={value} index={key} />
        ))}
      </div>
      <div className={styles.discover}>
        <Link to='/trillo/tours'>
          <ButtonAnimated colorScheme="blue">
            Discover all our Tours
          </ButtonAnimated>
        </Link>
      </div>
    </section>
  );
};

export default HomePagePopularTours;

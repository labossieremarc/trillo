import React, { useState } from "react";
import { Tours } from "../../DummyData/DummyData";
import { ButtonAnimated } from "../Button/Button";
import styles from "./FlipCard.module.scss";

interface Props {
  tours: Tours;
  index: number;
}

const FlipCard = ({ tours, index }: Props) => {
  let color = null;
  let background = null;
  switch (index) {
    case 0:
      color = styles.orange;
      background = styles.card__picture_1;
      break;
    case 1:
      color = styles.blue;
      background = styles.card__picture_2;
      break;
    case 2:
      color = styles.green;
      background = styles.card__picture_3;
      break;
  }
  console.log(color);
  return (
    <section className={styles.card}>
      <div className={`${styles.card__side} ${styles.card__side_front}`}>
        <div className={`${styles.card__picture} ${background}`} />
        <h4 className={styles.card__title}>
          <span className={`${styles.card__title_span} ${color}`}>
            {tours.title}
          </span>
        </h4>
        <ul className={styles.details}>
          {tours.content.map((value, key) => (
            <li className={styles.details__item} key={key}>
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${styles.card__side} ${styles.card__side_back} ${color}`}
      >
        <div className={styles.cta}>
          <div className={styles.price}>
            <p className={styles.price_only}>Only</p>
            <p className={styles.price_value}>${tours.cost}</p>
          </div>
          <ButtonAnimated>Book Now</ButtonAnimated>
        </div>
      </div>
    </section>
  );
};

export default FlipCard;

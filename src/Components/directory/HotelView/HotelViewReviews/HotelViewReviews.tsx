import React from "react";
import styles from "./HotelViewReviews.module.scss";

interface User {
  name: string;
  date: string;
  rating: number;
  quote: string;
  image: string;
}

interface Props {
  user: User;
}

const HotelViewReviews = ({ user }: Props) => {
  return (
    <figure className={styles.review}>
      <blockquote className={styles.review__text}>{user.quote}</blockquote>
      <figcaption className={styles.review__user}>
        <img
          src={window.location.origin + user.image}
          className={styles.review__photo}
          alt=''
        ></img>
        <div className={styles.review__user_box}>
          <p className={styles.review__user_name}>{user.name}</p>
          <p className={styles.review__user_date}>{user.date}</p>
        </div>
        <div className={styles.review__rating}>{user.rating}</div>
      </figcaption>
    </figure>
  );
};

export default HotelViewReviews;

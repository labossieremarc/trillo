import React from "react";
import styles from './CompositionPhoto.module.scss'

interface Props {
  image1: string;
  image2: string;
  image3: string;
}

const CompositionPhoto = ({ image1, image2, image3 }: Props) => {
  return (
    <>
      <div className={styles.composition}>
        <img
          src={image1}
          alt="nat1"
          className={`${styles.composition__photo} ${styles.composition__photo_p1}`}
        />
      </div>
      <div className={styles.composition}>
        <img
          src={image2}
          alt="nat2"
          className={`${styles.composition__photo} ${styles.composition__photo_p2}`}
        />
      </div>
      <div className={styles.composition}>
        <img
          src={image3}
          alt="nat3"
          className={`${styles.composition__photo} ${styles.composition__photo_p3}`}
        />
      </div>
    </>
  );
};

export default CompositionPhoto;

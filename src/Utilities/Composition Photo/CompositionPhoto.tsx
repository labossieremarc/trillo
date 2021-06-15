import React from "react";
import styles from './CompositionPhoto.module.scss'



const CompositionPhoto = () => {
  return (
    <>
      <div className={styles.composition}>
        <img
          src="img/nat-1-large.jpg"
          alt="nat1"
          className={`${styles.composition__photo} ${styles.composition__photo_p1}`}
        />
      </div>
      <div className={styles.composition}>
        <img
          src="img/nat-2-large.jpg"
          alt="nat2"
          className={`${styles.composition__photo} ${styles.composition__photo_p2}`}
        />
      </div>
      <div className={styles.composition}>
        <img
          src="img/nat-3-large.jpg"
          alt="nat3"
          className={`${styles.composition__photo} ${styles.composition__photo_p3}`}
        />
      </div>
    </>
  );
};

export default CompositionPhoto;

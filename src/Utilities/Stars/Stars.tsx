import React from 'react';
import styles from './Stars.module.scss'
interface Props{
    rating: number
}

const Stars = ({rating}:Props) => {

    return (
      <div className={styles.stars}>
        {[...Array(rating)].map((_, i) => (
          <svg className={styles.icon} key={i}>
            <use xlinkHref="img/sprite.svg#icon-star"></use>
          </svg>
        ))}
      </div>
    );
}

export default Stars;
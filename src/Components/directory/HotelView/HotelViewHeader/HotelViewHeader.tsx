import React from 'react';
import { InlineButton } from '../../../../Utilities/Button/Button';
import Stars from '../../../../Utilities/Stars/Stars';
import styles from './HotelViewHeader.module.scss';

interface Props {
    rating: number
}

const HotelViewHeader = ({rating}:Props) => {

    return (
      <div className={styles.overview}>
        <h1 className={styles.overview__heading}>Hotel Las Palmas</h1>
        <Stars rating={rating} />
        <div className={styles.overview__location}>
          <svg className={styles.overview__location_icon}>
            <use xlinkHref={window.location.origin + "/img/sprite.svg#icon-location-pin"}></use>
          </svg>
          <InlineButton>Albuferia, Portugal</InlineButton>
        </div>
        <div className={styles.overview__rating}>
          <div className={styles.overview__average}>8.6</div>
          <div className={styles.overview__rating_count}>429 votes</div>
        </div>
      </div>
    );
}

export default HotelViewHeader;
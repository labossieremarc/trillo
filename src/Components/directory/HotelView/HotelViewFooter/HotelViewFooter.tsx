import React from 'react';
import styles from './HotelViewFooter.module.scss';
import {OrderButton} from '../../../../Utilities/Button/Button'


const HotelViewFooter = () => {


    return (
        <div className={styles.cta}>
            <h2 className={styles.booknow}>
                Good news! We have 4 free rooms available
            </h2>
        <OrderButton visible={"Book now"} invisible={"Only 4 rooms Left"}></OrderButton>
      </div>
    );
}

export default HotelViewFooter;
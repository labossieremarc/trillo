import React from 'react';
import styles from './NavIcon.module.scss';

interface Props {
    icon: string;
    notification: number;
}


const NavIcon = ({icon, notification}:Props) => {
    return (
      <div className={styles.iconbox}>
        <svg className={styles.icon}>
          <use xlinkHref={icon}></use>
        </svg>
            <span className={styles.notification}>{notification}</span>
      </div>
    );
}

export default NavIcon;
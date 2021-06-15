import React from 'react'
import styles from './FeatureBox.module.scss';

interface Props {
    icon: string
    title: string;
    children: React.ReactNode;
}

const FeatureBox = ({title, children, icon} :Props) => {

    return (
      <div className={styles.feature}>
        <svg className={styles.feature__icon}>
          <use xlinkHref={window.location.origin + icon}></use>
        </svg>
        <h3 className={styles.heading_tertiary}>{title}</h3>
        <p className={styles.feature__text}>{children}</p>
      </div>
    );
}


export default FeatureBox;
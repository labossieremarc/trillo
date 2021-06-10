import React from 'react';
import styles from "./ViewList.module.scss";

interface Props {
    value: string[];
}
export function DescriptionList({ value }: Props) {
    return (
        <ul className={styles.list}>
            {value.map((value, key) => (
            <li className={styles.list__item} key={key}>{value}</li>
            ))}
        </ul>
    )
}


export function ImageList({ value }: Props) {
  return (

        <div className={styles.friends}>
        {value.map((value, key) => (
          <img src={value} key={key} className={styles.photo} alt=''></img>
          ))}

          </div>
  );
}
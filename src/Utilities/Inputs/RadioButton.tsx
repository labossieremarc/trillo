import React from 'react';
import styles from './Input.module.scss';

interface Props {
    id: string;
    label: string;
    name?: string;
}

const RadioButton = ({id, label, name}: Props) => {

    return (
        <div className={styles.radio}>
            <input type='radio' className={styles.radio__input} id={id} name={name} />
            <label htmlFor={id} className={styles.radio__label}>
                <span className={styles.radio__button}></span>{label}</label>
        </div>
    )
}

export default RadioButton;
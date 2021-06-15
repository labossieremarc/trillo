import React from 'react';
import styles from './Input.module.scss';

interface Props {
    id: string;
    placeholder: string;
    type: string;
}

const TextInput = ({id, placeholder, type}:Props) => {

    return (
      <div className={styles.input}>
        <input
          id={id}
          type={type}
          className={styles.input__input}
          placeholder={placeholder}
          required
        />
        <label htmlFor={id} className={styles.input__label}>
          {placeholder}
        </label>
      </div>
    );
}

export default TextInput;
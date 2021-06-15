import React from "react";
import { ButtonAnimated } from "../Button/Button";
import RadioButton from "../Inputs/RadioButton";
import TextInput from "../Inputs/TextInput";
import styles from "./BookForm.module.scss";

const BookForm = () => {
  return (
    <form action="#" className={styles.form} autoComplete="off">
      <h3 className={`${styles.heading__secondary} ${styles.book__heading}`}>
        Start booking now
      </h3>
      <TextInput type="text" id="name" placeholder="Full name" />
      <TextInput type="email" id="email" placeholder="Email Address" />
      <div className={styles.radiogroup}>
        <div className={styles.radiogroup__left}>
          <RadioButton id="small" label="Small tour group" name="tourSize" />
        </div>
        <RadioButton id="large" label="Large tour group" name="tourSize" />
      </div>
      <div className={styles.button}>
        <ButtonAnimated colorScheme="blue">Lets get Started!</ButtonAnimated>
      </div>
    </form>
  );
};

export default BookForm;

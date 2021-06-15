import React from "react";
import styles from "./StoryModal.module.scss";
import nat1 from "../../Assets/nat-8.jpg";
import nat2 from "../../Assets/nat-9.jpg";
import { ButtonAnimated } from "../Button/Button";
import { Link } from 'react-router-dom';

const StoryModal = () => {
  return (
    <div className={styles.modal} id="modal">
      <div className={styles.modal__content}>
        <div className={styles.modal__content_left}>
          <img src={nat1} alt="Tour Photo" className={styles.modal_img}></img>
          <img src={nat2} alt="Tour Photo" className={styles.modal_img}></img>
        </div>
        <div className={styles.modal__content_right}>
          <a href="#section-tours" className={styles.modal__close}>
            x
          </a>
          <h2 className={styles.heading__secondary}>Start booking now</h2>
          <h3 className={styles.heading__tertiary}>
            Please read these terms before continuing
          </h3>
          <p className={styles.modal__text}>
            Quaerat, aliquam animi quibusdam, ipsa quae repellat laboriosam
            omnis praesentium tempore reprehenderit minima nulla illum, magni
            vel officiis. Dolore aut hic et! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Natus repellendus aspernatur veniam
            non corporis nobis optio mollitia, ipsum inventore nemo? Et optio
            nam non sed sunt fugit corporis quam qui! Adipisicing elit. Et
            soluta id commodi suscipit magni non doloribus rerum, cumque
            aspernatur, omnis fuga voluptatibus accusantium. Officia placeat
            ducimus harum, ipsa ad repellat?
          </p>
          <div className={styles.modal__button}>
            <Link to='/trillo/tours'>
              <ButtonAnimated colorScheme="blue">Book Now!</ButtonAnimated>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;

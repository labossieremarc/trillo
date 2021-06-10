import React from 'react';
import styles from './Gallery.module.scss';


const Gallery = () => {
    const images = ["/img/hotel-1.jpg", "/img/hotel-2.jpg", "/img/hotel-3.jpg"];
    return (
      <div className={styles.gallery}>
        {images.map((value, key) => (
          <figure className={styles.gallery__item} key={key}>
            <img
              src={window.location.origin + value}
              className={styles.gallery__photo}
              alt=''
            />
          </figure>
        ))}
      </div>
    );
}

export default Gallery;
import React from "react";
import styles from "./HotelViewDetail.module.scss";
import {DescriptionList, ImageList} from '../../../../Utilities/ViewComponents/ViewList'
import HotelViewReviews from "../HotelViewReviews/HotelViewReviews";
import {descriptors, images, user} from '../../../../DummyData/DummyData'
import { InlineButton } from "../../../../Utilities/Button/Button";

const HotelViewDetail = () => {



  return (
    <div className={styles.detail}>
      <div className={styles.description}>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
          dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas,
          ut corporis incidunt deserunt quae architecto voluptate.
        </p>
        <p className={styles.paragraph}>
          Accusantium cumque, quas, ut corporis incidunt deserunt quae
          architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>
        <DescriptionList value={descriptors} />
        <div className={styles.recommend}>
          <p className={styles.recommend__count}>
            Lucy and 3 other friends recommend this hotel!
          </p>
          <ImageList value={images} />
        </div>
      </div>
      <div className={styles.user_reviews}>
        <HotelViewReviews user={user[0]} />
        <HotelViewReviews user={user[1]} />
        <InlineButton AdditionalClass='rounded'>
          Show All <span>{String.fromCharCode(187)}</span>
        </InlineButton>
      </div>
    </div>
  );
};

export default HotelViewDetail;

import React from "react";
import Gallery from "../../../Utilities/Gallery/Gallery";
import styles from "./HotelView.module.scss";
import HotelViewDetail from "./HotelViewDetail/HotelViewDetail";
import HotelViewFooter from "./HotelViewFooter/HotelViewFooter";
import HotelViewHeader from "./HotelViewHeader/HotelViewHeader";

const HotelView = () => {
  const rating = 5;

  return (
    <div className={styles.hotel_view}>
      <Gallery />
      <HotelViewHeader rating={rating} />
      <HotelViewDetail />
      <HotelViewFooter/>
    </div>
  );
};

export default HotelView;

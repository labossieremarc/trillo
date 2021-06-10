import React from "react";
import { Switch, Route } from "react-router";
import FlightView from "../../Components/directory/FlightView/FlightView";
import HotelView from "../../Components/directory/HotelView/HotelView";
import RentalView from "../../Components/directory/RentalView/RentalView";
import TourView from "../../Components/directory/TourView/TourView";
import Navbar from "../../Components/NavBar/Navbar";
import SideBar from "../../Components/SideBar/SideBar";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.content}>
          <SideBar />
          <Switch>
            <Route path="/trillo/flight" exact>
              <FlightView />
            </Route>
            <Route path="/trillo/rental" exact>
              <RentalView />
            </Route>
            <Route path="/trillo/tours" exact>
              <TourView />
            </Route>
            <Route path="/trillo/hotel" exact>
              <HotelView />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

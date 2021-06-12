import React from "react";
import styles from "./HomePageComponents.module.scss";

import FeatureBox from "../../../Utilities/FeatureBox/FeatureBox";
import { features } from "../../../DummyData/DummyData";
import { ButtonAnimated } from "../../../Utilities/Button/Button";

const HomePageFeatures = () => {
  return (
    <section className={styles.features}>
      <div className={styles.row}>
        {features.map((values, key) => (
          <FeatureBox key={key} icon={values.icon} title={values.title}>
            {values.text}
          </FeatureBox>
        ))}
      </div>
    </section>
  );
};

export default HomePageFeatures;

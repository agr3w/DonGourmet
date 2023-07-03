import React from "react";
import Imgbanner from "./banner.png"
import styles from "./banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <img src={Imgbanner} alt="Banner" />
    </div>
  );
}

export default Banner;

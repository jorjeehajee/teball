import React from "react";
import Image from "next/image";
import styles from "./herobanner.module.css";

const Herobanner = () => {
  return (
    <div className={styles.imgContainer}>
      <Image src="/herobanner.jpg" fill className={styles.heroImg} />
    </div>
  );
};

export default Herobanner;

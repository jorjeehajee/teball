import React from "react";
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./stylelist.module.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";

const Stylelist = () => {
  return (
    <div className={styles.list}>
      <Row className={styles.row}>
        <Col>
          <a href="#" className={styles.link}>
            <img src="https://i.ytimg.com/vi/8h1naGPh_WY/maxresdefault.jpg" alt="" />
          </a>
        </Col>
        <Col>
          <a href="#" className={styles.link}>
            <img src="https://wallpapercave.com/wp/wp12087897.jpg" alt="" />
          </a>
        </Col>
        <Col>
          <a href="#" className={styles.link}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_363,c_limit/48d88328-a9ab-4654-aaa8-2b88efd551b9/nike-releases-its-new-football-boot-the-tiempo-legend-10.jpg" alt="" />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Stylelist;

import React from "react";
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link'

import styles from "./footer.module.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.topbar}>
        <Container>
          " Lorem Ipsum is simply dummy text of the printing "
        </Container>
      </div>
      <div className={styles.main}>
        <Container>
          <div className={styles.mainInfo}>
            <Row>
              <Col xs="auto">
                <div className={styles.company}>
                  <div className={styles.companyLogo}>
                    <Image src="/logo.png" fill />
                  </div>
                </div>
              </Col>
              <Col>
                <h4 className={styles.topic}>About</h4>
                <ul className={styles.sitemap}>
                  <li>
                    <Link href='/'>Sitemap 1</Link>
                  </li>
                  <li>
                    <Link href='/'>Sitemap 2</Link>
                  </li>
                  <li>
                    <Link href='/'>Sitemap 3</Link>
                  </li>
                  <li>
                    <Link href='/'>Sitemap 4</Link>
                  </li>
                  <li>
                    <Link href='/'>Sitemap 5</Link>
                  </li>
                </ul>
              </Col>
              <Col>
                <h4 className={styles.topic}>Customer Service</h4>
                <ul className={styles.sitemap}>
                  <li>
                    <Link href='/'>Sitemap 1</Link>
                  </li>
                  <li>
                    <Link href='/'>Sitemap 2</Link>
                  </li>
                  <li>
                    <Link href='/'>Sitemap 3</Link>
                  </li>
                </ul>
              </Col>
              <Col>
                <h4 className={styles.topic}>Social Media</h4>
              </Col>
            </Row>
          </div>
          <div className={styles.mainCopy}>
            Copyright © 2024 Teball Life. All rights reserved.
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

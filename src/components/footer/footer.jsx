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
                <h4 className={styles.topic}>เกี่ยวกับเรา</h4>
                <ul className={styles.sitemap}>
                  <li>
                    <Link href='/'>คู่มือผู้ซื้อ</Link>
                  </li>
                  <li>
                    <Link href='/'>คู่มือผู้ขาย</Link>
                  </li>
                  <li>
                    <Link href='/'>เงื่อนไข และข้อตกลง</Link>
                  </li>
                  <li>
                    <Link href='/'>นโยบายความเป็นส่วนตัว</Link>
                  </li>
                  <li>
                    <Link href='/'>นโยบายคุกกี้</Link>
                  </li>
                </ul>
              </Col>
              <Col>
                <h4 className={styles.topic}>ช่วยเหลือลูกค้า</h4>
                <ul className={styles.sitemap}>
                  <li>
                    <Link href='/'>ติดต่อเรา</Link>
                  </li>
                  <li>
                    <Link href='/'>ศูนย์ช่วยเหลือ</Link>
                  </li>
                  <li>
                    <Link href='/'>คำถามที่พบบ่อย</Link>
                  </li>
                </ul>
              </Col>
              <Col>
                <h4 className={styles.topic}>ติดตามเรา</h4>
              </Col>
            </Row>
          </div>
          <div className={styles.mainCopy}>
            <Row className="align-items-center">
              <Col>
                Copyright © 2024 Teball Life. All rights reserved.
              </Col>
              <Col xs="auto">
                <div className={styles.mainPay}>
                  <div><Image src="/pay-visa.png" fill /></div>
                  <div><Image src="/pay-mastercard.jpg" fill /></div>
                  <div><Image src="/pay-promptpay.webp" fill /></div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

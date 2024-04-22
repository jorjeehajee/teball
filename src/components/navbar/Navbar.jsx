import React from 'react'
import Image from "next/image";
import styles from './navbar.module.css'
import Link from 'next/link'
import Navmenu from './navbar/navmenu'
import Search from '../searchmenu/Search'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Row className='g-0 justify-content-between align-items-center'>
        <Col lg="auto">
          <Link href='/' className={styles.logo}>
            <Image src="/logo.png" fill alt='logo' sizes="100vw" />
          </Link>
        </Col>
        <Col>
          <Search/>
        </Col>
        <Col lg="auto">
          <Navmenu/>
        </Col>
      </Row>
    </nav>
  )
}

export default Navbar
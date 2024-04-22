import React from "react";
import Image from 'next/image'
import styles from "./navmenu.module.css";
import Link from "next/link";

// const links = [
//   // {
//   //   title: "Products",
//   //   path: "/products",
//   // },
//   // {
//   //   title: "Login",
//   //   path: "/login",
//   // },
// ];

const Navmenu = () => {
  return (
    <div className={styles.menu}>
      <Link className={styles.link} href='/login'>
        <div className={styles.icon}>
          <Image src="/icon-people.png" className={styles.iconImg} fill alt="login" sizes="100vw"/>
        </div>
        ล็อคอิน
      </Link>
    </div>
  );
};

export default Navmenu;

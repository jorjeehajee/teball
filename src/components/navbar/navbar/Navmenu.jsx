import React from "react";
import styles from "./navmenu.module.css";
import Link from "next/link";

const links = [
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Login",
    path: "/login",
  },
];

const Navmenu = () => {
  return (
    <div className={styles.menu}>
      {links.map((item) => (
        <Link href={item.path} key={item.title}>{item.title}</Link>
      ))}
    </div>
  );
};

export default Navmenu;

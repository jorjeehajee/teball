import React from "react";
import styles from "./brand.module.css";
import Link from "next/link";
import Image from "next/image";

const brands = [
  {
    brandName: "Nike",
    path: "products/nike",
    logo: "/brand-nike",
  },
  {
    brandName: "Adidas",
    path: "products/adidas",
    logo: "/brand-adidas",
  },
  {
    brandName: "Mizuno",
    path: "products/mizuno",
    logo: "/brand-nike",
  },
  {
    brandName: "Puma",
    path: "products/puma",
    logo: "/brand-puma",
  },
];

const Brandlist = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brandContainer}>
        {brands.map((item) => (
          <div className={styles.logoImage}>
            <Link href={item.path} key={item.brandName}>
              <Image
                src={item.logo + ".png"}
                layout="fill"
                alt={item.brandName}
                className={styles.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brandlist;

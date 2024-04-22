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
  {
    brandName: "Puma",
    path: "products/puma",
    logo: "/brand-puma",
  },
  {
    brandName: "Puma",
    path: "products/puma",
    logo: "/brand-puma",
  },
  {
    brandName: "Puma",
    path: "products/puma",
    logo: "/brand-puma",
  },
  {
    brandName: "Puma",
    path: "products/puma",
    logo: "/brand-puma",
  },
  {
    brandName: "Puma",
    path: "products/puma",
    logo: "/brand-puma",
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
        {brands.map((item, index) => (
          <div className={styles.logoImage} key={index}>
            <Link className={styles.link} href={item.path} >
              <figure className={styles.cover}>
                <Image
                  src={item.logo + ".png"}
                  fill
                  alt={item.brandName}
                  className={styles.image}
                  sizes="(max-width: 768px) 50vw, 25vw" 
                />
              </figure>
              {item.brandName}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brandlist;

import React from "react";
import style from "./itemdetail.module.css";
import Image from "next/image";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const ItemDetail = () => {
  return (
    <div className={style.container}>
      <div className={style.productCard}>
        <div className={style.productImage}>
          <Image
            src="https://www.soccerbible.com/media/141867/mizuno-fb-min.jpg"
            fill
            className={style.imageContent}
            alt="shoes"
            sizes="100vw"
          />
        </div>
        <div className={style.productDesc}>
          <div className={style.productDetailTop}>
            <div className={style.productBrand}>
              <h2>ยี่ห้อ : Nike</h2>
              <h2>รุ่น : Merculia</h2>
            </div>
            <h3>คำอธิบาย</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              earum enim aspernatur maxime fugiat quo cumque molestiae veniam
              eaque doloremque hic ex saepe ullam, similique obcaecati nobis et
              vero cupiditate rerum. Hic quibusdam amet ad, tempora dignissimos
              ut facilis dolorum non, atque doloremque totam error! Autem saepe
              illum consequuntur eveniet?
            </p>
            <h4>ประเภท : ของใหม่</h4>
          </div>
          <div className={style.productDetailBottom}>
            <div>
              <h4>ผู้ขาย : Jorjee</h4>
            </div>
            <div className={style.productDetailAction}>
              <div>ราคา : 4,600 บาท</div>
              <Button variant="contained" className={style.purchaseBtn} endIcon={<ShoppingBagIcon />}>
                ซื้อเลย
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

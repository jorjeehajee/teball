import ItemModel from "@/components/filter/ItemModel";
import ItemSize from "@/components/filter/ItemSize";
import React from "react";
import style from "./brand.module.css";
import ItemBrand from "@/components/filter/ItemBrand";
import Itemcard from "@/components/itemlist/itemcard/Itemcard";
import ItemType from "@/components/filter/ItemType";

const ProductList = () => {
  return (
    <>
      <section className={style.container}>
        <ItemBrand />
        <ItemModel />
        <ItemSize />
        <ItemType/>
      </section>
      <section className={style.productContainer}>
        <h2>รายการสินค้าทั้งหมด</h2>
        <div className={style.productList}>
          <Itemcard/>
          <Itemcard/>
          <Itemcard/>
          <Itemcard/>
          <Itemcard/>
        </div>
      </section>
    </>
  );
};

export default ProductList;

import React from 'react'
import styles from './itemlist.module.css'
import Itemcard from './itemcard/Itemcard'


const Itemlist = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.sectionTitle}>สินค้าใหม่</h2>
        <div className={styles.sectionItems}>
            <Itemcard/>
            <Itemcard/>
            <Itemcard/>
            <Itemcard/>
            <Itemcard/>
            <Itemcard/>
            <Itemcard/>
            <Itemcard/>
            <Itemcard/>
            <Itemcard/>
            <Itemcard/>
            <Itemcard/>
        </div>
    </div>
  )
}

export default Itemlist
import React from 'react'
import Image from 'next/image'
import styles from './search.module.css'

const Search = () => {
  return (
    <div className={styles.container}>
        <form className={styles.form}>
            <div className={styles.icon}>
              <Image src="/icon-search.png" className={styles.iconImg} fill />
            </div>
            <input className={styles.input} type="text" placeholder='คุณหารองเท้ารุ่นไหนอยู่ ?' />
        </form>
    </div>
  )
}

export default Search
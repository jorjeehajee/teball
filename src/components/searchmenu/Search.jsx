import React from 'react'
import styles from './search.module.css'

const Search = () => {
  return (
    <div className={styles.container}>
        <form>
            <input className={styles.search} type="text" placeholder='ค้นหาสินค้า...' />
        </form>
    </div>
  )
}

export default Search
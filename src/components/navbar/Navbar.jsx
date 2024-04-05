import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Navmenu from './navbar/navmenu'
import Search from '../searchmenu/Search'

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <Link href='/' className={styles.logo}>Logo</Link>
        <Search/>
        <Navmenu/>
    </nav>
  )
}

export default Navbar
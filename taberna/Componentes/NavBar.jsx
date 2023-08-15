// components/Nav.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <p className={`${styles.link} ${styles.home}`}>Home</p>
      </Link>
      <Link href="/create">
        <p className={`${styles.link} ${styles.create}`}>Create</p>
      </Link>
    </div>
  );
}

export default NavBar;

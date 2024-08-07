import React from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div>
        <Image
          src={Logo}
          width={300}
          height={64}
          loading="lazy"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h1>Festival</h1>
    </nav>
  );
}

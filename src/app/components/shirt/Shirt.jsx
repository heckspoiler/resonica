'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Shirt.module.css';
import Frontside from '../../../../public/frontside.png';
import Backside from '../../../../public/backside.png';

export const Shirt = () => {
  const [showFront, setShowFront] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFront((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.flipper} ${showFront ? '' : styles.flip}`}>
        <div className={styles.front}>
          <Image
            src={Frontside}
            alt="Frontside of shirt"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.back}>
          <Image
            src={Backside}
            alt="Backside of shirt"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Shirt;

'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Logo.module.css';

export default function LogoTwo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 500); // 3000 milliseconds (3 seconds) delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.LogoTwo}>
      <video
        ref={videoRef}
        src="/video.mp4"
        autoPlay={true}
        height={500}
        width={500}
        controls={false}
        muted
        playsInline
        loop={true}
      ></video>
    </div>
  );
}

import React from 'react';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <video
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

import React from 'react';
import styles from './Button.module.css';

export default function Button() {
  return (
    <div className={styles.ButtonContainer}>
      <a href="https://my.weezevent.com/resonica-festival" target="_blank">
        <button className={styles.Button}>Buy Tickets</button>
      </a>
    </div>
  );
}

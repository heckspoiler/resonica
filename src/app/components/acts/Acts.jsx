import React from 'react';
import styles from './Acts.module.css';

import { acts } from '@/app/actsArray';

export default function Acts() {
  return (
    <div className={styles.ActContainer}>
      {acts.map((act, index) => (
        <div key={act.act}>
          <a href={act.link} target="_blank">
            {act.act}
          </a>
        </div>
      ))}
    </div>
  );
}

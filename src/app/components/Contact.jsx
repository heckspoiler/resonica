import React from 'react';
import Link from 'next/link';

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <Link
      href="mailto:contact@resonica.xyz"
      className={styles.Link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Contact</span>

      <svg
        width="11"
        height="11"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.7438 14.1387L19.7438 1.2562L13.203 7.8311C15.5911 5.43035 19.6903 7.10372 19.716 10.4899L19.7438 14.1387Z"
          fill="rgb(245, 245, 245)"
        />
        <path
          d="M19.7438 1.2562L11.1555 1.2562L6.86133 1.2562L10.4889 1.26933C13.9055 1.28169 15.6126 5.40886 13.203 7.8311L19.7438 1.2562Z"
          fill="rgb(245, 245, 245)"
        />
        <path
          d="M0.997796 20.0022L13.203 7.8311M19.7438 1.2562L11.1555 1.2562L6.86133 1.2562M19.7438 1.2562L19.7438 14.1387M19.7438 1.2562L13.203 7.8311M2.56718 1.2562L6.86133 1.2562M19.7438 18.4328V14.1387M6.86133 1.2562L10.4889 1.26933C13.9055 1.28169 15.6126 5.40886 13.203 7.8311V7.8311M19.7438 14.1387L19.716 10.4899C19.6903 7.10372 15.5911 5.43035 13.203 7.8311V7.8311"
          stroke="rgb(245, 245, 245)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

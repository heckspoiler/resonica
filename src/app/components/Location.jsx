import React from 'react';
import Link from 'next/link';

import styles from './Location.module.css';

export default function Location() {
  return (
    <Link
      href="https://www.google.com/maps?sca_esv=209cf1f1455dac22&sca_upv=1&output=search&q=Stade+de+la+Tuili%C3%A8re,+Lausanne,+1018,+Lausanne&source=lnms&fbs=AEQNm0DGn4uIgG-mZUrOKeUTf9PvgpEJHCbsPkb90vyLH1BtQ3EJNFVJZTVVtBt9jcRT87OYMU81KVsQfc4g-6hKB12puL88CirK0mg3tlzIa--kazDbYeFbtiogwTvddD8Y16ATH_u3ppmEhuZs3_Raz2IIzOCTr2MtNA1kO1_n-plJy2GROc246iDCUC5ywiDbAWf_6Jh_&entry=mc&ved=1t:200715&ictx=111"
      target="_blank"
      className={styles.Link}
    >
      <span>Location</span>

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

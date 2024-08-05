import styles from './page.module.css';

import Acts from './components/acts/Acts';
import Button from './components/button/Button';
import Link from 'next/link';
import Location from './components/Location';
import Logo from './components/Logo';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.Container}>
        <div className={styles.LeftSectionContent}>
          <div className={styles.LogoContainer}>
            <Logo />
          </div>
          <div className={styles.ButtonContainer}>
            <Button />
          </div>
        </div>
      </section>
      <section className={styles.Container}>
        <div className={styles.RightSectionContent}>
          <div className={styles.TitleContainer}>
            <h2 className={styles.Year}>2024</h2>
            <h2 className={styles.Date}>14.09 - 15.09</h2>
            <h3 className={styles.Time}>2pm - 2am</h3>
          </div>
          <div className={styles.Location}>
            <Location />
          </div>
          <div className={styles.ActsContainer}>
            <Acts />
          </div>
        </div>
      </section>
    </main>
  );
}

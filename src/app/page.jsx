import styles from './page.module.css';

import Acts from './components/acts/Acts';
import Button from './components/button/Button';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.Container}>
        <div className={styles.LeftSectionContent}>
          <div className={styles.ButtonContainer}>
            <Button />
          </div>
        </div>
      </section>
      <section className={styles.Container}>
        <div className={styles.RightSectionContent}>
          <div className={styles.ActsContainer}>
            <Acts />
          </div>
        </div>
      </section>
    </main>
  );
}

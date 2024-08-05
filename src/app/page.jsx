import styles from './page.module.css';

import Acts from './components/acts/Acts';
import Button from './components/button/Button';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.ActsContainer}>
        <Acts />
      </section>
      <section className={styles.ButtonContainer}>
        <Button />
      </section>
    </main>
  );
}

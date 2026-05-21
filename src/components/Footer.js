import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.sym}>&gt;_</span>
            <span className={styles.name}>CodePath</span>
          </div>
          <p className={styles.tagline}>
            Открытая платформа для тех, кто хочет научиться программировать с нуля.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Платформа</p>
          <Link href="/courses">Курсы</Link>
          <Link href="/about">О нас</Link>
          <Link href="/contact">Контакты</Link>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Направления</p>
          <Link href="/courses">Python</Link>
          <Link href="/courses">JavaScript</Link>
          <Link href="/courses">Кибербезопасность</Link>
          <Link href="/courses">Веб-разработка</Link>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Связь</p>
          <a href="mailto:hello@codepath.kz">hello@codepath.kz</a>
          <a href="https://t.me/codepath_kz" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <hr className="divider" />
      <div className={styles.bottom}>
        <span>© 2025 CodePath. Казахстан 🇰🇿</span>
        <span className={styles.made}>Сделано с <span className={styles.heart}>♥</span> для разработчиков</span>
      </div>
    </footer>
  );
}

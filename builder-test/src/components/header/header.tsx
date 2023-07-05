import Link from 'next/link';
import styles from './header.module.css';

export default function Header(props: any) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerWrap}`}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/alogo-1.svg" alt="logo" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/example">Example</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
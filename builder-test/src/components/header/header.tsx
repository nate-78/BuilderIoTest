import Link from 'next/link';
import styles from './header.module.css';

export default function Header(props: any) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>
          <Link href="/">
            <img src="/alogo-1.svg" alt="logo" />
          </Link>
        </div>
      </div>
    </header>
  );
}
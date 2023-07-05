import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          &copy; { new Date().getFullYear() }
        </div>
      </div>
    </footer>
  );
}
import styles from './pageTitle.module.css';

export default function PageTitle(title: any) {
  return (
    <div className={styles.pageTitle}>
      <div className="container">
        <div className={styles.content}>
          <h1>{title.title}</h1>
        </div>
      </div>
    </div>
  );
}
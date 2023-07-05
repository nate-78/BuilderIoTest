import styles from './card.module.css';

export default function Card(props: any) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeadline}>
        <h3>{props.title}</h3>
      </div>
      <div className={styles.cardBody}>
        {props.content}
      </div>
    </div>
  );
}
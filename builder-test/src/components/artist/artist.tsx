import styles from './artist.module.css';

export default function Artist(props: any) {
  console.log(props);
  return (
    <div className={styles.artist}>
      stuff will go here
    </div>
  );
}
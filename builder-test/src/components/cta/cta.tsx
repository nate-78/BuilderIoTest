import Link from 'next/link';
import styles from './cta.module.css';

export default function Cta(props: any) {
  return (
    <div className={styles.cta} suppressHydrationWarning={true}>
      <div className={styles.ctaContent}>
        <h2>{props.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
        <div className={styles.ctaBtn}>
          <Link href={props.callToActionLink} className="btn btn-white">
            {props.callToActionLinkText}
          </Link>
        </div>
      </div>
      <div className={styles.ctaImg}>
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
}
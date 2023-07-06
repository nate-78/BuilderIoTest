import styles from './artist.module.css';

export default function Artist(props: any) {
  console.log(props.props);
  return (
    <div className={styles.artist} suppressHydrationWarning={true}>
      <div className={styles.artistTop}>
        <img src={props.props.data.image} alt={props.props.data.name} />
        <div className={styles.artistName}>
          <h3>{props.props.data.name}</h3>
          <span>{props.props.data.label}</span>
        </div>
      </div>
      <div className={styles.artistBottom}>
        <div className={styles.albums}>
          { props.props.data.albums.map((album: any) => {
            return (
              <div className={styles.album} key={album.album.id}>
                <img src={album.album.value.data.image} alt={album.album.value.data.name} />
                <div className={styles.albumText}>
                  <b>{album.album.value.data.name}</b><br />
                  {album.album.value.data.releaseMonth} {album.album.value.data.releaseYear}
                </div>
              </div>
            )
          }) }
        </div>
      </div>
    </div>
  );
}
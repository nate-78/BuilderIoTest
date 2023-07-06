import { builder } from "@builder.io/sdk";
import Artist from "../artist/artist";
import { useEffect, useState } from "react";
import styles from './allArtists.module.css';

builder.init('aec0025c19714040a9b33f7105687769');


export default function AllArtists(props: any) {
  // get artist data
  const hasRun = false; // tie useEffect to this to make sure it only runs once
  const [artists, setArtists] = useState<any>([]);
  
  useEffect(() => {
    builder.getAll("artist").then((data) => {
      setArtists(data);
    });
  }, [hasRun]);


  return (
    <div className={styles.artistsGrid}>
      { artists.map((artist: any) => {
        return (
          <Artist props={artist} key={artist.id} />
        )
      }) }
    </div>
  );
}
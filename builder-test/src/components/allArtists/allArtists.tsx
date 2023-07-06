import { builder } from "@builder.io/sdk";
import Artist from "../artist/artist";
import { useState } from "react";

builder.init('aec0025c19714040a9b33f7105687769');


export default function AllArtists(props: any) {
  console.log(props);
  // get artist data
  const [artists, setArtists] = useState<any>([]);
  builder.getAll("artist").then((data) => {
    setArtists(data);
  });
  // const artists = await builder.getAll("artist", { prerender: false });
  // console.log(artists);


  return (
    <div>
      <h2>heading</h2>
      { artists.map((artist: any) => {
        return (
          <div key={artist.id}>{artist.name}</div>
        )
      }) }
    </div>
  );
}
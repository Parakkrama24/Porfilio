import React from "react";
import styles from "./Playlist.module.css";
import playdata from "../../data/youTube.json";
import CardNew from "../youtubeList/cardNew";

export const PlayList = () => {
  return (
    <section className={styles.container} id="Videos">
      <h2 id="video" className="text-3xl">YouTube Channel</h2>
      <div className={styles.player}>
        {playdata.map((data, id) => (
          <CardNew key={id} data={data} />
        ))}
      </div>
    </section>
  );
};

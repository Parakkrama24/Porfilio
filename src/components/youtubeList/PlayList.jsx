import React from 'react'

import styles from "./Playlist.Module.css"
import playdata from '../../data/youTube.json';
import { Card } from "./card";



export const PlayList = () => {
  return (
   <section className={styles.container}  id ="Videos">
    <h2 id="video">My Youtube Channel</h2>
    <div className={styles.player}>
        {playdata.map((data,id)=>{
            return <Card key={id}  data={data}/>;
        })}
    </div>
   </section>
  )
}

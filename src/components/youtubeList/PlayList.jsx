import React from 'react'

import styles from "./Playlist.module.css"
import playdata from '../../data/youTube.json';
import { Card } from "./Card";



export const PlayList = () => {
  return (
   <section className={styles.container}  id ="Videos">
    <h2 id="video">Youtube Channel</h2>
    <div className={styles.player}>
        {playdata.map((data,id)=>{
            return <Card key={id}  data={data}/>;
        })}
    </div>
   </section>
  )
}

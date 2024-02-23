import React from "react";
import downloadCv from "../otherOptions/downloadCv.jsx"
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Parakkrama</h1>
        <p className={styles.description}>
          I'm a game developer  with 3 years of experience using unity Engine and
          c#. Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttonconatiner}>
        <a href="mailto:parakkramadasanayaka.2@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <button onClick={downloadCv}  className={styles.DownloadBtn}>
          Download Cv
        </button>
        </div>
       
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

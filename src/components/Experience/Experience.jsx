import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <motion.div
                key={id}
                className={styles.skill}
                custom={id}
                initial="hidden"
                animate="visible"
                variants={skillVariants}
              >
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
};

import React,{useRef, useState} from "react";
import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Pagination } from 'swiper/modules';
export const Projects = () => {
     //default number of elements to display in the project list
  const[noOfElements,setnoOfElements]= useState(4);
//  const slice= data.ProjectCard.slice(0,noOfElements);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div 
      className={styles.projects}>
        {projects.map((project, id) => {
          return<SwiperSlide> <ProjectCard key={id} project={project} /></SwiperSlide>;
        })}
      </div>
    </section>
      </Swiper>
     
    </>
    
  );
};

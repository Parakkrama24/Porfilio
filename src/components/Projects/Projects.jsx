import React, { useState } from "react";
import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export const Projects = () => {
  // Default number of elements to display in the project list
  const [noOfElements, setNoOfElements] = useState(4);

  return (
    <>
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            // When window width is >= 640px (small devices)
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // When window width is >= 768px (medium devices)
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // When window width is >= 1024px (large devices)
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {projects.map((project, id) => (
            <SwiperSlide key={id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-0 right-0 top-[150rem] w-100 h-100 bg-blue-200 rounded-full blur-xl opacity-75 md:w-100 md:h-100" /> 
      </section>
    </>
  );
};

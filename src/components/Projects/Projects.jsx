import React, { useState } from "react";
import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../../data/projects.json";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Card from "./card";
import "swiper/css";
import "swiper/css/navigation";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  // Default number of elements to display in the project list
  const [noOfElements, setNoOfElements] = useState(4);

  return (
    <div>
      <section className={styles.container} id="projects"
      >
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
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {projects.map((project, id) => (
            <SwiperSlide
              key={id}
              style={{
                backgroundImage: `url(${getImageUrl(project.imageSrc)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px", // Adjust the height as needed
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="card-overlay"
                style={{
                  position: "absolute",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: darken the background
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "20px",
                  transition: "all 0.3s ease",
                  display: "flex", // Flexbox for centering the card
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                  zIndex: 2, // Ensure card is above the background
                }}
              >
                <Card project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

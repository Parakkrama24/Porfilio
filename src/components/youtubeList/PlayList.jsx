import React from "react";
import styles from "./Playlist.module.css";
import playdata from "../../data/youTube.json";
import CardNew from "./CardNew";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export const PlayList = () => {
  return (
    <section className={styles.container} id="Videos">
      <h2 id="video" className="text-3xl text-center">YouTube Channel</h2>
      <div className={styles.player}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 }, // Small phones
            480: { slidesPerView: 1, spaceBetween: 10 }, // Medium phones
            768: { slidesPerView: 2, spaceBetween: 15 }, // Tablets
            1024: { slidesPerView: 3, spaceBetween: 20 }, // Laptops & Desktops
          }}
        >
          {playdata.map((data, id) => (
            <SwiperSlide key={id}>
              <CardNew data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

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
      <h2 id="video" className="text-3xl">YouTube Channel</h2>
      <div className={styles.player}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={3}  // Show 3 cards at a time (Adjust as needed)
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper"
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

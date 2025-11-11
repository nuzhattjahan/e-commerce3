import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styles from "./Cards2.module.css";

const ProductData = [
  { id: 1, title: "Phones", imgs: "/assets/icons/smartphone.png" },
  { id: 2, title: "Computer", imgs: "/assets/icons/monitor.png" },
  { id: 3, title: "SmartWatch", imgs: "/assets/icons/apple.png" },
  { id: 4, title: "Camera", imgs: "/assets/icons/camera.png" },
  { id: 5, title: "Headphones", imgs: "/assets/icons/headphones.png" },
  { id: 6, title: "Gaming", imgs: "/assets/icons/console.png" },
];

export default function Cards2() {
  return (
    <>
      <div className="todays pt-4">
        <div className="redBox"></div>
        <h5 className="redColor">Categories</h5>
      </div>
      <h1 className='pl-0'>Browse By Categories</h1>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.mySwiper2}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {ProductData.map((item) => (
          <SwiperSlide key={item.id} className={styles.card}>
            <div className={styles.icons}>
              <div className={styles.imgs}>
                <img src={item.imgs} alt={item.title} />
              </div>
            </div>
            <div className={styles.content}>
              <h4>{item.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

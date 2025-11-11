import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FaApple } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./HeroSection.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper1 pt-4"
      >
        <SwiperSlide>
          <div className="content">
            <div className="iphone">
              <p><FaApple /></p>
              <p>Iphone 14 series</p>
            </div>
            <h1>Up to 10% Off Voucher</h1>
            <a href="#">Shop Now</a>
          </div>
          <div className="images"></div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </>
  );
}

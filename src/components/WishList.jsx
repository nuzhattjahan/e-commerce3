import React from 'react'
import styles from "./WishList.module.css";

import { FiShoppingCart } from "react-icons/fi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";


const ProductData = [
  {
    id: 1,
    title: "Laptop",
    brand: "Dell",
    discountPercent: 40,
    price: 960,
    oldPrice: 1100,
    rating: "⭐⭐⭐",
    ratingCount: 88,
    img: "/assets/imgs/laptop.png",
  },
  {
    id: 2,
    title: "Wired Keyboard",
    brand: "AK",
    discountPercent: 35,
    price: 960,
    oldPrice: 1160,
    rating: "⭐⭐⭐⭐⭐",
    ratingCount: 75,
    img: "/assets/imgs//keyboard.png",
  },
  {
    id: 3,
    title: "Gaming Monitor",
    brand: "MSI",
    discountPercent: 30,
    price: 370,
    oldPrice: 400,
    rating: "⭐⭐⭐⭐⭐",
    ratingCount: 99,
    img: "/assets/imgs/lcd.png",
  },
  {
    id: 4,
    title: "Gaming",
    brand: "MSI",
    discountPercent: 30,
    price: 370,
    oldPrice: 400,
    rating: "⭐⭐⭐⭐⭐",
    ratingCount: 99,
    img: "/assets/imgs/controller.png",
  }
];

const WishListData = [
  {
    id: 1,
    title: "Gucci Bag",
    brand: "Gucci",
    discountPercent: 20,
    price: 500,
    oldPrice: 700,
    rating: "⭐⭐⭐",
    ratingCount: 88,
    img: "/assets/imgs/bag.png",
  },
  {
    id: 2,
    title: "Dell Laptop",
    brand: "dell",
    discountPercent: 35,
    price: 960,
    oldPrice: 1160,
    rating: "⭐⭐⭐⭐⭐",
    ratingCount: 75,
    img: "/assets/imgs//laptop.png",
  },
  {
    id: 3,
    title: "Gaming Controller",
    brand: "MSI",
    discountPercent: 30,
    price: 370,
    oldPrice: 400,
    rating: "⭐⭐⭐⭐⭐",
    ratingCount: 99,
    img: "/assets/imgs/controller 2.png",
  },
  {
    id: 4,
    title: "Bomber Jacket",
    brand: "MSI",
    discountPercent: 30,
    price: 370,
    oldPrice: 400,
    rating: "⭐⭐⭐⭐⭐",
    ratingCount: 99,
    img: "/assets/imgs/bomber jacket.png",
  }
];


const WishList = () => {
  
  return (
    <>
    {/* top Part */}
    <div className="container">
      
        <div className={`py-4 ${styles.toprow}`}>
        <h5 className={`redColor${styles.black}`} >Wish List</h5>
        <button className={`btn ${styles.button}`}>Move All To Bag</button>
        </div>
        
    
    
    
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper1}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {WishListData.map((item) => {
          return (
            <SwiperSlide className={styles.card}>
              <div className={styles.images}>
                <p className={styles.discountPercent}>
                  -{item.discountPercent}%
                </p>
                <div className={styles.imgs}>
                  <img src={item.img} alt="" />
                </div>
                <div className={styles.cart}>
                  <button className="btn btn-dark w-100"><span className={styles.cartIcon}><FiShoppingCart /></span>Add to Cart</button>
                </div>
              </div>
              <div className={styles.content}>
                <h4>{item.title}</h4>
                <div className={` d-flex gap-3 ${styles.pricing} `}>
                  <span>{item.price}</span>
                  <del>{item.oldPrice}</del>
                </div>
                <div className={styles.rating}>
                  <span>{item.rating}</span>
                  <span>({item.ratingCount})</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      
    {/* bottom part */}
    
      <div className="todays py-4">
        <div className="redBox p-3"></div>
        <div className={styles.toprow}>
        <h5 className={`redColor${styles.black} px-3`} >Just for you</h5>
        
        </div>
        <button className={`btn ${styles.button}`}>See All</button>
    </div>
    
    
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper1}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {ProductData.map((item) => {
          return (
            <SwiperSlide className={styles.card}>
              <div className={styles.images}>
                <p className={styles.discountPercent}>
                  -{item.discountPercent}%
                </p>
                <div className={styles.imgs}>
                  <img src={item.img} alt="" />
                </div>
                <div className={styles.cart}>
                  <button className="btn btn-dark w-100"><span className={styles.cartIcon}><FiShoppingCart /></span>Add to Cart</button>
                </div>
              </div>
              <div className={styles.content}>
                <h4>{item.title}</h4>
                <div className={` d-flex gap-3 ${styles.pricing} `}>
                  <span>{item.price}</span>
                  <del>{item.oldPrice}</del>
                </div>
                <div className={styles.rating}>
                  <span>{item.rating}</span>
                  <span>({item.ratingCount})</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      
    </div>
    </>
  )
}

export default WishList
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Cards.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const ProductData = [
  {
    id: 1,
    title: "Gamepad",
    brand: "Havit",
    discountPercent: 40,
    price: 120,
    oldPrice: 160,
    rating: "⭐⭐⭐",
    ratingCount: 88,
    img: "/assets/imgs/controller.png",
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

const Cards = () => {
  return (
    <>
    <div className="todays">
        <div className="redBox"></div>
        <h5 className="redColor" >Todays</h5>
    </div>
    <h1 className="pl-0">Flash Sales</h1>
    
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
                  <button className="btn btn-dark w-100">Add to Cart</button>
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
      <div className="pt-3 text-center">
        <button className="red-btn">View All Products</button>
      </div>
    </>
  );
};

export default Cards;
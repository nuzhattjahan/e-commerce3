// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Cards3.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const ProductData = [
  {
    id: 1,
    title: "The North Coat",
    brand: "Havit",
    price: 260,
    oldPrice: 360,
    rating: "⭐⭐⭐",
    ratingCount: 88,
    img: "/assets/imgs/jacket.png",
  },
  {
    id: 2,
    title: "Gucci Bag",
    brand: "AK",
    price: 960,
    oldPrice: 1160,
    rating: "⭐⭐⭐⭐⭐",
    ratingCount: 75,
    img: "/assets/imgs//bag.png",
  },
  {
    id: 3,
    title: "RGB Speaker",
    brand: "MSI",
    price: 160,
    oldPrice: 170,
    rating: "⭐⭐⭐⭐⭐",
    ratingCount: 99,
    img: "/assets/imgs/speaker.png",
  },
  {
    id: 4,
    title: "Small Book shelf",
    brand: "MSI",
    price: 370,
    oldPrice: 400,
    rating: "⭐⭐⭐⭐⭐",
    ratingCount: 99,
    img: "/assets/imgs/table.png",
  }
];

const Cards = () => {
  return (
    <>
    <div className="todays">
        <div className="redBox"></div>
        <h5 className="redColor" >This Month</h5>
    </div>
    <h1 className="pl-0">Best Selling Products</h1>
    
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
            slidesPerView: 2,
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
                
                <div className={styles.imgs}>
                  <img src={item.img} alt="" />
                  <div className={styles.cart}>
                  <button className="btn btn-dark w-100">Add to Cart</button>
                </div>
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
        <div className="pt-3 text-center">
          <button className={styles.btnPosition} >View All</button>
        </div>
      </Swiper>
      
    </>
  );
};

export default Cards;
import React from "react";
import styles from "./About.module.css";

//icons
import { AiTwotoneShop } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { GrShop } from "react-icons/gr";
import { FaSackDollar } from "react-icons/fa6";
//social icons
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
//bottom icons
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";


//swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const About = () => {
  const team = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      img: "/assets/imgs/tom.png"
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      img: "/assets/imgs/emma.png",
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      img: "/assets/imgs/will.png",
    },
    {
      name: "Scarlett Johnson",
      role: "Marketing Head",
      img: "/assets/imgs/tom.png",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.mainContent}>
              <div className={styles.content}>
                <h2>Our Story</h2>
                <p>
                  Launced in 2015, Exclusive is South Asias premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </p>
                <p>
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </div>
              <div className={styles.image}>
                <div className={styles.img}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row py-5">
            <div className="col-3">
              <div>
                <div className={styles.mainIcons}>
                  <div className={styles.icon}>
                    <div className={styles.blackIcon}>
                      <div className={styles.icons}>
                        <AiTwotoneShop />
                      </div>
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <h3>10.5k</h3>
                    <p>Sellers active on our site</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div>
                <div className={styles.mainIcons}>
                  <div className={styles.icon}>
                    <div className={styles.blackIcon}>
                      <div className={styles.icons}>
                        <CiDollar />
                      </div>
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <h3>33k</h3>
                    <p>Monthly Product Sale</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.center}>
                <div className={styles.mainIcons}>
                  <div className={styles.icon}>
                    <div className={styles.blackIcon}>
                      <div className={styles.icons}>
                        <GrShop />
                      </div>
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <h3>45.5</h3>
                    <p>Cutomer active in our site</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.center}>
                <div className={styles.mainIcons}>
                  <div className={styles.icon}>
                    <div className={styles.blackIcon}>
                      <div className={styles.icons}>
                        <FaSackDollar />
                      </div>
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <h3>25k</h3>
                    <p>Annual gross sale on our site</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* team slider */}
        <div className={styles.teamSection}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className={styles.mySwiper}
          >
            {team.map((member, index) => (
              <SwiperSlide key={index} className={styles.card}>
                <div className={styles.imageBox}>
                  <img src={member.img} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className={styles.social}>
                  <a href="#">
                    <FiTwitter />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* bottom */}

        <div className="row py-5">
        <div className="col-4">
          <div>
            <div className={styles.delivery}>
              <div className={styles.icon}>
                <div className={styles.blackIcon}>
                <div className={styles.icons}>
                    <FaTruckFast />
                </div>
                </div>
              </div>
              <div className={styles.content1}>
                <h5>FREE AND FAST DELIVER</h5>
                <p>Free delivery for orders above 140$</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div>
            <div className={styles.service}>
              <div className={styles.icon}>
                <div className={styles.blackIcon}>
                    <div className={styles.icons}>
                    <RiCustomerServiceFill />
                </div>
                </div>
              </div>
              <div className={styles.content1}>
                <h5>24/7 CUSTOMERS SERVICE</h5>
                <p>Friendly 24/7 customer support</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className={styles.center}>
            <div className={styles.guarantee}>
              <div className={styles.icon}>
                <div className={styles.blackIcon}>
                    <div className={styles.icons}>
                    <IoShieldCheckmarkSharp />
                </div>
                </div>
              </div>
              <div className={styles.content1}>
                <h5>MONEY BACK GUARANTEE</h5>
                <p>We return money within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;

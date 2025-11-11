import React from "react";
import styles from "./HomeBanner2.module.css";

const HomeBanner2 = () => {
  return (
    <>
    <div className="">
    <div className="todays">
        <div className="redBox"></div>
        <h5 className="redColor" >Featured</h5>
    </div>
    <h1 className="pl-0">New Arrival</h1>


    <div className={`${styles.bannerContainer}`}>
      {/* LEFT: PlayStation 5 */}
      <div className={`${styles.leftSection}`}>
        <div className={styles.bannerItem}>
          <div className={`${styles.bgImage} ${styles.ps5}`}></div>
          <div className={styles.textContent}>
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <a href="#">Shop Now</a>
          </div>
        </div>
      </div>

      {/* RIGHT: Three Banners */}
      <div className={styles.rightSection}>
        {/* Top: Women’s Collection */}
        <div className={`${styles.bannerItem} ${styles.topBanner}`}>
          <div className={`${styles.bgImage} ${styles.women}`}></div>
          <div className={styles.textContent}>
            <h3>Women’s Collections</h3>
            <p>Featured women collections that give you another vibe.</p>
            <a href="#">Shop Now</a>
          </div>
        </div>

        {/* Bottom: Two side-by-side banners */}
        <div className={styles.bottomRow}>
          {/* Speakers */}
          <div className={`${styles.bannerItem} ${styles.smallBanner}`}>
            <div className={`${styles.bgImage} ${styles.speakers}`}></div>
            <div className={styles.textContent}>
              <h3>Speakers</h3>
              <p>Amazon wireless speakers</p>
              <a href="#">Shop Now</a>
            </div>
          </div>

          {/* Perfume */}
          <div className={`${styles.bannerItem} ${styles.smallBanner}`}>
            <div className={`${styles.bgImage} ${styles.perfume}`}></div>
            <div className={styles.textContent}>
              <h3>Perfume</h3>
              <p>GUCCI INTENSE OUD EDP</p>
              <a href="#">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default HomeBanner2;

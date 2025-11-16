import React from "react";
import styles from "./HomeBanner.module.css";

const HomeBanner = () => {
  return (
    <>
      <div className="row py-3">
        <div className={`d-flex ${styles.HomeBanner}`}>
          <div className="col-lg-5">
            <div className={`${styles.content}`}>
              <p>Categories</p>
              <h1>Enhance Your Music Exprience</h1>
              <div className="d-flex py-2">
                <p className={styles.circles}><b>23</b> Hours</p>
                <p className={styles.circles}><b>05</b> Days</p>
                <p className={styles.circles}><b>59</b> Minutes</p>
                <p className={styles.circles}><b>35</b> Seconds</p>
              </div>
            <div>
                <button className={styles.btn}>Buy Now!</button>
            </div>
              
            </div>
          </div>
          <div className={`col-lg-7 ${styles.img}`}>
            <div className={`${styles.bgimg}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;

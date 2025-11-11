import React from "react";
import styles from "./Bottom.module.css";

// icons
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";

const Bottom = () => {
  return (
    <>
      <div className="row py-5">
        <div className="col-4">
          <div>
            <div className={styles.delivery}>
              <div className={styles.icon}>
                <div className={styles.blackIcon}>
                <div className={styles.img}>
                    <FaTruckFast />
                </div>
                </div>
              </div>
              <div className={styles.content}>
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
                    <div className={styles.img}>
                    <RiCustomerServiceFill />
                </div>
                </div>
              </div>
              <div className={styles.content}>
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
                    <div className={styles.img}>
                    <IoShieldCheckmarkSharp />
                </div>
                </div>
              </div>
              <div className={styles.content}>
                <h5>MONEY BACK GUARANTEE</h5>
                <p>We return money within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;

import React from 'react';
import styles from "./Footer.module.css";
import { IoMdSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className={`${styles.footer}`}>
    <div className='container'>
      
        <div className="row justify-content-center pt-3">
          <div className="col-2">
            <h5>Exclusive</h5>
            <p><b>Subscribe</b></p>
            <p>Get 10% off on your first order</p>
            <div className={styles.email}>
              <form action="post">
                <input type="text" placeholder='Enter your email' />
                <span className={styles.search}><IoMdSend /></span>
              </form>
              </div>
            </div>
          <div className="col-2">
            <h5>Support</h5>
            <p>1111 Saddar Karachi, DH1515 Pakistan.</p>
            <p>exclusive@gmail.com</p>
            <p>+923165463</p>
          </div>
          <div className="col-2">
            <h5>Account</h5>
            <p>My Account</p>
            <p>Login/Register</p>
            <p>Cart</p>
            <p>Whishlist</p>
            <p>Shop</p>
          </div>
          <div className="col-2">
            <h5>Quick Link</h5>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="col-2">
            <h5>Download App</h5>
            <p>Save 3$ with App New Users Only</p>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <FaFacebookF />
              </div>
            <div className={styles.icon}>
              <FaInstagram />
            </div>
            <div className={styles.icon}>
              <FiTwitter />
            </div>
            <div className={styles.icon}>
              <FaLinkedinIn />
            </div>
            

            </div>
            
          </div>
        </div>
        
        
        </div>
      
      </div>  
    </>
    
  )
}

export default Footer
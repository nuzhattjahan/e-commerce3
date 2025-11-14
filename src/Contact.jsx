import React from 'react'
import styles from "./Contact.module.css";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className={styles.mainContent}>
          <div className={styles.content}>
          
          <div className={styles.contact}>
          <div className={styles.call}> 
            <FaPhoneFlip />
          </div>
          <h5>Call to us</h5>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
          
          <hr />
          
          <div className={styles.contact}>
          <div className={styles.mail}> 
            <MdEmail />
            
          </div>
          <h5>Write To Us</h5>
          </div>
          
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
        <div className={styles.Form}>
          
          <form action="#" method='post'>
            <div className="d-flex p-4 py-0 gap-4">
            <input type="text" placeholder='Your Name*'/>
            <input type="email" placeholder='Your Email*'/>
            <input type="number" placeholder='Your Number*'/>
            </div>
            <div className='p-4'>
            <textarea name="comment" id="comment"rows="5" cols="81" placeholder="Your Message" maxlength="500"></textarea>
            <button className={`btn red-btn px-5 ${styles.message}`}>Send Message</button>
            </div>
          </form>
          
        </div>
        
        </div>
        
        </div>
     </div>
    </div>
    </>
  )
}

export default Contact
import React from 'react';
import styles from "./Login.module.css";


const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-6">
          <div className={styles.image}>
            
          </div>
        </div>
        <div className="col-6">
          <div className={styles.form}>
            <h2>Log in to Exclusive</h2>
            <p>Enter your details below</p>
            <form action="#" method='post'>
            <input type="email" name='email' placeholder='Email'  />
            <input type="password" name="password" placeholder='password' />
            <div className={`${styles.links}`}>
            <button className={`btn red-btn ${styles.signup}`}>Log In</button>
            <a href="#">Forgot Password?</a>
            </div>
            
          </form>
        </div>
        </div>
      </div>
      </div>
    </>
    
  )
}

export default Login
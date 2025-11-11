import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import App from "../App.css"
const Navbar = () => {
  return (
    <>
      {/* <div className="container">
        <div className="row">
          <div className="col-12"> */}
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand Nabar" href="#">
                  Exclusive
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="/contact">
                        Contact
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link active" href="/about">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="/about">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                  <form class="d-flex search-bar" role="search">
                    
                    <input class="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
                    <span className="search-icon"><FaSearch /></span>
                  </form>
                  <span className="nav-icons"><FaRegHeart /></span>
                  <span className="nav-icons"><FiShoppingCart /></span>

            
                </div>
              </div>
            </nav>
          {/* </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;

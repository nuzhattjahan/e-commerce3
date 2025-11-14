import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import App from "../App.css"
const Navbar = () => {
  return (
    <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <Link className="navbar-brand Nabar" to="/">Exclusive</Link>
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
                      <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link active" to="/contact">Contact</Link>
                    </li>

                    <li class="nav-item">
                      <Link class="nav-link active" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" to="/signup"> Sign Up</Link>
                        
                      
                    </li>
                  </ul>
                  <form class="d-flex search-bar" role="search">
                    
                    <input class="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
                    <span className="search-icon"><FaSearch /></span>
                  </form>
                  <span className="nav-icons"><Link to="/wishlist"><FaRegHeart /></Link></span>
                  <span className="nav-icons"><Link to="/cart"><FiShoppingCart /></Link></span>

            
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

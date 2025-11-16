import React from "react";
// icons
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
//user icons
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiShoppingBag3Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

// router
import { Link } from "react-router-dom";
import App from "../App.css";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link className="navbar-brand Nabar" to="/">
            Exclusive
          </Link>
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/signup">
                  
                  Sign Up
                </Link>
              </li>
            </ul>
            <form class="d-flex search-bar" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="What are you looking for?"
                aria-label="Search"
              />
              <span className="search-icon">
                <FaSearch />
              </span>
            </form>
            <span className="nav-icons">
              <Link to="/wishlist">
                <FaRegHeart />
              </Link>
            </span>
            <span className="nav-icons">
              <Link to="/cart">
                <FiShoppingCart />
              </Link>
            </span>
            <span className="nav-icons">
              <div class="dropdown">
                <button
                  className="userIcon iconBtn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >

                  <IoPersonCircleOutline />
                </button>
                <ul class="dropdown-menu col-lg-12">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <p><span><IoPersonCircleOutline /></span>Manage My Account</p>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <p><span><RiShoppingBag3Line /></span>My Order</p>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <p><span><MdOutlineCancel /></span>My Cancellation</p>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <p><span><FaRegStar /></span>My Reviews</p>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <p><span><IoIosLogOut /></span>Logout</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </span>
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

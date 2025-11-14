import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from "./home";
import Contact from "./Contact";
import About from './About';
import SignUp from "./SignUp";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./Login"
import Cart from "./components/Cart";
import WishList from './components/WishList';

const App = () => {
  return (
    <>
    
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/contact' element ={<Contact/>}/>
          <Route path='/about' element ={<About/>}/>
          <Route path='/signup' element ={<SignUp/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/cart' element ={<Cart/>}/>
          <Route path='/wishlist' element ={<WishList/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
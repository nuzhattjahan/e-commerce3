import React from 'react';
import Categories from './components/Categories';
import HeroSection from './components/HeroSection';
import Cards from "./components/Cards";
import Cards2 from "./components/Cards2";
import Cards3 from "./components/Cards3";
import HomeBanner from "./components/HomeBanner";
import HomeBanner2 from "./components/HomeBanner2";
import Bottom from "./components/Bottom";
const Home = () => {
  return (
    <>

  {/* 
    bootstrap classes 
    sm = small screen
    md = medium screen
    lg = large screen
    xl = xtra large screen
    
    col-lg-6 col-lg-6
  */}
    <div className="container">
      <div className="row">
        <div className="col-3"><Categories/></div>
        <div className="col-9"><HeroSection/></div>
      </div>
      <div className="row">
          <Cards/>
      </div>
      <div className="row">
          <Cards2/>
      </div>
      <div className="row">
        <Cards3/>
      </div>
      <div className="row">
          <HomeBanner/>
      </div>
      <div className="row">
        <HomeBanner2/>
      </div>
      <div className="row">
        <Bottom/>
      </div>
      
    </div>
    
    </>
  )
}

export default Home;
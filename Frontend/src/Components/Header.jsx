import React,{useState} from "react";
import "typeface-roboto";
import Navbar from "./Navbar";

import styles from "./Header.module.css";

const Header = ({scrollToDestination}) => {

  


  return (
    <div>
      <header className={`w-[100%] h-[85vh]`} data-aos="fade-down">
        <div className="relative hero bg-landing-bg w-[100%] h-[85vh]  bg-cover bg-center brightness-50"></div>
      <Navbar scrollToDestination={scrollToDestination} />
        <div
          className={`${styles.text} text-center  absolute top-1/3 left-96   w-[50vw]`}
          data-aos="zoom-in"
        >
          Travel more conveniently with the RoomI<span>Q</span>
        </div>
      </header>


    

    </div>
  );
};

export default Header;

import React, { useState } from "react";
import UserSignup from "../Model/UserSignup";
import UserSignin from "../Model/UserSignin";

import styles from "./UserAuth.module.css"
const UserAuth = () => {
  const [position, setPosition] = useState("signup");
  return (
    <div className='bg-Auth-bg bg-center bg-cover bg-no-repeat relative min-h-screen'>
        <div className=' grid grid-cols-2 min-h-screen relative backdrop-brightness-50'>
          <UserSignup position={setPosition}  />
          <UserSignin position={setPosition} />
        </div>
        <div
          className={`absolute top-0 left-0 min-h-screen w-[45%] bg-slider-bg bg-cover bg-center brightness-100 transition-transform ease-linear duration-300 
            ${position === "signup" ? "translate-x-[55vw]" : "translate-x-0"}`}
        ></div>
    </div>
  );
};

export default UserAuth;

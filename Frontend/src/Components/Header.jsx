import React from "react";
import "typeface-roboto";
import { FaCircleUser } from "react-icons/fa6";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const Navigate = useNavigate();

  return (
    <div>
      <header className={`w-[100%] h-[85vh]`} data-aos="fade-down">
        <div className="relative hero bg-landing-bg w-[100%] h-[85vh]  bg-cover bg-center brightness-50"></div>
        <nav
          className=" absolute top-5 left-20 w-[90vw]  flex items-center  justify-between h-10 "
          data-aos="fade-down"
        >
          <div className={`${styles.logo}`}>
            RoomI<span>Q</span>
          </div>
          <div className={`${styles.content}`}>
            <ul className="flex items-center gap-8 text-white  ">
              <li>
                <a className="" href="">
                  Home
                </a>
              </li>
              <li>
                <a href="">Destination</a>
              </li>
              <li>
                <a href="">Articals</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>

              {localStorage.getItem("token") ? (
                <button className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
                  {localStorage.getItem("username").split("")[0]}
                  {localStorage.getItem("username").split("")[0].toUpperCase()}
                </button>
              ) : (
                <button
                  className={`${styles.btnL} bg-slate-200 text-black rounded font-bold`}
                  onClick={() => Navigate("auth")}
                >
                  <FaCircleUser className="inline text-2xl" /> Login / Signup
                </button>
              )}
            </ul>
          </div>
        </nav>
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

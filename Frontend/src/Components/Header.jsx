import React from 'react'
import 'typeface-roboto';
import { FaCircleUser } from "react-icons/fa6";
import styles from "./Header.module.css"
const Header = () => {
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
                <a className='' href="">Home</a>
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
              <button
                className={`${styles.btnL} bg-slate-200 text-black rounded font-bold`}
              >
                <FaCircleUser className='inline text-2xl' /> Login / Signup
              </button>
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
  )
}

export default Header
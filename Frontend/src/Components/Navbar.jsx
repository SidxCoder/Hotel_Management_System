import React,{useRef, useState} from 'react'
import styles from "./Header.module.css"
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
const Navbar = ({scrollToDestination}) => {

  const destinationRef = useRef(null);
    const Navigate = useNavigate();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    function handleLogout(){
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("type")
        setIsDialogOpen(false);
        Navigate("/")
     }
  return (
    <div>
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
                <button onClick={()=>{Navigate("/")}}>Home</button>
              </li>
              {/* <li>
              <button
                className="cursor-pointer"
                onClick={scrollToDestination} // Scroll to Destination section
              >
                Destination
              </button>
              </li> */}
              <li>
                   <p  onClick={()=>{Navigate("/userBookings")}}>Bookings</p>
              </li>
              {/* <li>
                <a href="#Foot">Contact Us</a>
              </li> */}

              {localStorage.getItem("token") &&
              localStorage.getItem("type") === "user" ? (
                <button className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center" onClick={()=>setIsDialogOpen(true)}>
                  {localStorage.getItem("username").split("")[0].toUpperCase()}
                </button>
              ) : (
                <button
                  className={`${styles.btnL} bg-slate-200 text-black rounded font-bold`}
                  onClick={() => Navigate("/auth")}
                >
                  <FaCircleUser className="inline text-2xl" /> Login / Signup
                </button>
              )}
            </ul>
          </div>
        </nav>


          {/* //dialog box */}
      {isDialogOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-md shadow-lg text-center w-[300px]">
            <p className="text-gray-700 font-medium mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-between">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                onClick={handleLogout}
              >
                Logout
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar

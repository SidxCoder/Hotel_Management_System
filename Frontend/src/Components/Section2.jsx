import React from 'react'
import styles from "./Section2.module.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaLocationDot } from "react-icons/fa6";
import { CgCalendarDates } from "react-icons/cg";
import { MdBedroomBaby } from "react-icons/md";
const Section2 = () => {
  const [checkInDate, setCheckInDate] = React.useState(null);
  const [checkOutDate, setCheckOutDate] = React.useState(null);
  
  return (
    <div>
      <div className={`${styles.search} flex items-center text-left justify-center gap-20 absolute bottom-8 left-20  shadow-sm  search w-[90vw] h-[25vh] bg-white rounded z-10 font-poppins `} data-aos="slide-up">
               <div className="location ">
               <FaLocationDot className={`bg-blue-200 rounded-full p-3 h-10 w-10 text-blue-700`} />
               <h3 className='mt-2  text-gray-800'><b>Destination</b></h3>
                <select className={`border-2 h-10 border-gray-700 rounded-[0.5rem] w-52 mt-2`} name="" id="">
                  <option value="">Select a city</option>
                  <option value="Mohali">Mohali</option>
                  <option value="Chandigarh">Chandigarh</option>
                   <option value="Kharar">Kharar</option>
                   <option value="Zirkpur">Zirkpur</option>
                   <option value="Panchkula">Panchkula</option>
                   <option value="Landran"></option>
                </select>
               </div>

               {/* Check-In Date Picker */}
        <div className="location mt-2">
          <CgCalendarDates className="bg-blue-200 rounded-full p-3 h-10 w-10 text-blue-700" />
          <h3 className="mt-2 text-gray-800"><b>Check-In</b></h3>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            minDate={new Date()}
            placeholderText="Select Check-In Date"
            className=" border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 mt-2 w-52"
          />
        </div>

        {/* Check-Out Date Picker */}
        <div className="location mt-2">
          <CgCalendarDates className="bg-blue-200 rounded-full p-3 h-10 w-10 text-blue-700" />
          <h3 className="mt-2  text-gray-800"><b>Check-Out</b></h3>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            minDate={checkInDate || new Date()}
            placeholderText="Select Check-Out Date"
            className="border-2  border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 mt-2 w-52"
          />
        </div>

               <div className="location">
               <MdBedroomBaby className={`bg-blue-200 rounded-full p-3 h-10 w-10 text-blue-700`} />
               <h3 className='mt-2  text-gray-800'><b>Room / Guests</b></h3>
                <select className={`border-2 h-10  border-gray-700 rounded-lg w-52 mt-2`} name="" id="">
                  <option value="">Room</option>
                  <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
            <option value="3">3 Rooms</option>
            <option value="4">4 Rooms</option>
                </select>
               </div>
              <button className='bg-amber-600 transform hover:scale-105 transition duration-300  text-white rounded-md p-3 px-6 border-white hover:shadow-lg'>Check Rooms</button>
           </div>

           <div className='flex items-center w-[100%] min-h-screen pt-15 gap-10 px-20 bg-slate-200' data-aos="fade-right" data-aos-duration="2500">
              <video className="w-full h-auto max-w-3xl rounded"  autoPlay muted playsInline loop>
               <source src="/hotel_video.mp4" type="video/mp4" />
               Your browser does not support the video tag.
                </video>
                <div className={` ${styles.text1} w-[40vw]`}>
                  <h2 className='pb-8  text-gray-800'>Elevate Your Experience with RoomI<span>Q</span></h2>
                  <p className='text-xl' >Roomi<span>Q</span> is a smart hotel management system that streamlines bookings, check-ins, and room availability. It offers a user-friendly interface for guests and powerful tools for staff, ensuring a seamless experience. Roomi<span>Q</span>: Where comfort meets technology.</p>
                  <b className="font">Rendring comfort</b>
                </div>
               </div>
    </div>
  )
}

export default Section2

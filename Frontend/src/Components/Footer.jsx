import React from 'react'
import { FaFacebookSquare, FaTwitterSquare ,FaInstagramSquare,FaYoutubeSquare } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <footer id='Foot' className=' font-poppins'>
        <div className="foot_content flex text-left justify-center gap-20 py-10 text-gray-300 bg-black">
            <div className={`part1 leading-6 `}data-aos="fade-up">
                <h2 className='font-medium text-xl  mb-4'>RoomI<span className='text-red-700'>Q</span></h2>
                <p>Simplify Your Hotel Operations with RoomI<span className='text-red-700'>Q</span>.</p>
                <p>Efficiency Redefined for the Hospitality Industry</p>
                <p>Where Hospitality Meets Innovation.</p>
                 <div className="media flex justify-left gap-5 text-3xl mt-4"data-aos="fade-up">
                 <FaFacebookSquare className='transform hover:scale-125 transition duration-300 cursor-pointer '/>  
                <FaTwitterSquare className='transform hover:scale-125 transition duration-300 cursor-pointer ' />
                <FaInstagramSquare className='transform hover:scale-125 transition duration-300 cursor-pointer ' />
                <FaYoutubeSquare className='transform hover:scale-125 transition duration-300 cursor-pointer ' />
                 </div>
            </div>
            <div className={`part2 leading-8 `} data-aos="fade-up" data-aos-duration="500">
                <h2 className='font-medium text-xl mb-4'>Quick links</h2>
                <a className='block hover:underline hover:text-blue-700 duration-300' href="">Home</a>
                <a className='block hover:underline hover:text-blue-700 duration-300' href="">About Us</a>
                <a className='block hover:underline hover:text-blue-700 duration-300' href="">Contact Us</a>
                <a className='block hover:underline hover:text-blue-700 duration-300' href="">Privacy Policy</a>
                <a className='block hover:underline hover:text-blue-700 duration-300 ' href="">Terms & Conditions</a>
            </div>
            <div className={`part3 leading-8`}data-aos="fade-up" data-aos-duration="500">
       <h2 className='font-medium text-xl mb-4'>Quick Services/Features</h2>
               <a  className='block hover:text-blue-700 hover:underline duration-300' href="">Online Booking Management</a>
                <a  className='block hover:text-blue-700 hover:underline duration-300' href="">Guest Experience Tools</a>
                <a className='block hover:text-blue-700 hover:underline duration-300'  href="">Analytics & Insights</a>
                <a className='block hover:text-blue-700 hover:underline duration-300'  href="">Staff Management</a>
            </div>
            <div className={`part4 `} data-aos="fade-up" data-aos-duration="500">
                <h2  className='font-medium text-xl mb-4'>Subscribe Now</h2>
                <div className="subscribe ">
                <input type="text" placeholder='xyz123@gmail.com' className='inline border-1 border-black bg-slate-300  pr-10 w-[100%] text-black ' />
                <IoIosSend className='inline text-3xl border-collapse rounded -ml-10 text-black'  />
                </div>
              
                <h2 className='mt-2'>Accounts</h2>
                 <ul>
                  <li className='cursor-pointer underline underline-offset-2 text-white text-sm  ' onClick={()=>{navigate("/admin/auth")}}>Admin</li>
            <li className='cursor-pointer underline underline-offset-2 text-white text-sm' onClick={()=>{navigate("/seller/auth")}}>Seller</li>
                 </ul>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

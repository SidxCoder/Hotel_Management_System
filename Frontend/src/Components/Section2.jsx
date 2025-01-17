import React from 'react'
import styles from "./Section2.module.css"
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { additem } from '../../lib/store';

const Section2 = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [show,setShow] = React.useState(false)
  const [values,setValues] = React.useState({
    location: "Mohali",
    fromDate: null,
    toDate: null,
    guests: 1,
    rooms: 1,
    RoomType: null,
  })

  function handleChange(e,type){
    console.log(e.target.value)
    setValues(prev=>({
      ...prev,
      [type]: e.target.value
    }))
  }

  function handleSubmit(){
    console.log("values",values)
    dispatch(additem(values))
    navigate("/search")
  }

  function handleIncrement(type){
    setValues(prev=>({
      ...prev,
      [type]: prev[type] + 1
    }))
  }
  function handleDecrement(type){
    if(values[type] >1){
      setValues(prev=>({
        ...prev,
        [type]: prev[type] - 1
      }))
    }
  }
  return (
      <div className='h-[80vh]'>
        <div className='absolute z-10 w-[75vw] h-[15vh] shadow-md shadow-black border border-secondaryText bg-[#E4E3DF] translate-x-[13vw] top-[77vh] rounded-2xl flex justify-between p-4'>
          <label forhtml="location" className='flex flex-col items-center'>
            <div className='flex gap-2 items-center '>
              <IoLocationOutline className='text-secondaryC text-2xl' />
              <p className='text-secondaryText text-lg  '>City or Destintaion</p>
            </div>
            <input type="text" className='bg-transparent focus:border-none font-bold text-center text-xl ' id='location' value={values.location} onChange={(e)=>{handleChange(e,"location")}} />
          </label>
          <label forhtml="bookingdate">
          <div   className='flex gap-2 items-center  '>
              <MdOutlineDateRange className='text-secondaryC text-2xl' />
              <p className='text-lg text-secondaryText'>Booking Dates</p>
            </div>
            <div className='flex gap-2'>
            <input  type="date" name="" id="bookingdate"  className='bg-transparent w-28' onChange={(e)=>handleChange(e,"fromDate")}/>
            <input type="date" name="" id=""  className='bg-transparent w-28' onChange={(e)=>handleChange(e,"toDate")}/>
            </div>

          </label>
          <div>
          <div  className='flex gap-2 items-center cursor-pointer realtive' id='guests' onClick={()=>setShow(!show)}  >
              <GoPeople  className='text-secondaryC text-2xl'/>
              <p className='text-lg text-secondaryText'>Guests and Rooms</p>
            </div>
            <div>
            <div className='flex text-xl  justify-center font-bold' > 
              <p>{values.guests} Adults,</p>
              <p>{values.rooms} Rooms</p>
            </div>
            {
              show? (
                <div className=' rounded-md absolute top-17 shadow-md shadow-gray-500 w-60 h-32 p-2 bg-gradient-to-t from-slate-300 to-yellow-200'>
                  <div>
                  <div className='grid grid-cols-2 '>
                  <div>
                    <h1 className='text-xl font-semibold'>Guests</h1>
                  <div className='flex justify-between items-center p-1'>
                    <button className='w-10 h-10 border border-black rounded-full' onClick={()=>handleDecrement("guests")} >
                      -
                    </button>
                    {values.guests}
                    <button className='w-10 h-10 border border-black rounded-full p-1' onClick={()=>handleIncrement("guests")}>
                      +
                    </button>
                  </div>
                  </div>
                  <div>
                    <h1 className='text-xl font-semibold'>Rooms</h1>
                  <div className='flex justify-between items-center'>
                    <button className='w-10 h-10 border border-black rounded-full' onClick={()=>handleDecrement("rooms")}>
                      -
                    </button>
                    {values.rooms}
                    <button className='w-10 h-10 border border-black rounded-full' onClick={()=>handleIncrement("rooms")}>
                      +
                    </button>
                  </div>
                  </div>
                  </div>
                  <div className='flex items-center justify-around'>
                  <label htmlFor="" className='flex gap-2'>
                    <input type="radio" name="roomtype" id="room type" onChange={()=>{setValues(prev=>({...prev,RoomType:"AC"}))}} />
                    <p className='text-lg' >AC</p>
                  </label>
                  <label htmlFor="" className='flex gap-2'>
                  <input type="radio" name="roomtype" id="roomtype" onChange={()=>{setValues(prev=>({...prev,RoomType:"NonAC"}))}} />
                  <p className='text-lg' >NON-AC</p>
                  </label>
                  </div>
                  </div>
                </div>
              ):null
            }
            </div>
          </div>
          <div onClick={handleSubmit} className='h-full w-[10vh] rounded-full invert-0 flex justify-center items-center bg-yellow-600  border-black border-2'>
            <FaSearch className='w-6 h-6 text-black'  />
          </div>
          
        </div>


        <div className='flex items-center w-[100%] h-[80vh] pt-15 gap-10 px-20 bg-slate-200' data-aos="fade-right" data-aos-duration="2500">
              <video className="w-full h-auto max-w-2xl rounded"  autoPlay muted playsInline loop>
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

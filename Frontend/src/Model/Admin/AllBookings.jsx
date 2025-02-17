import React, { useEffect, useState } from 'react'
import axios from "axios"
import { BACKEND_URL } from '../../../config'
import { AdminBookingCard } from '../../Components/HotelCard'
const AllBookings = () => {

  const [data, setData] =useState([])
  useEffect(()=>{
    async function serverCall(){
      const response = await axios.get(`${BACKEND_URL}/admin/getallbookings`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      })
      console.log(response.data);
      
      setData(response.data)
    }
    serverCall()
  },[])
  return (
    <>
    <div className='flex flex-col items-center'>
        {data.map((item,index)=>(
          <AdminBookingCard key={index} item={item}/>
        ))}
    </div>
    </>
  )
}

export default AllBookings
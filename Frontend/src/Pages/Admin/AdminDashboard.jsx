import React, { useEffect, useState } from 'react'
import AdminSideBar from '../../Model/Admin/AdminSideBar'
import AdminDashPage from '../../Model/Admin/AdminDashPage'
import NavbarShow from '../../Components/NavbarShow'
import { useNavigate } from 'react-router-dom'
const AdminDashboard = () => {
  const[page, setPage]= useState("AllHotels")
  const[showSidebar, setShowSidebar] =useState(true)

   const navigate= useNavigate()

   useEffect(()=>{
    if(!localStorage.getItem("token") || localStorage.getItem("type")!=="admin"){
      navigate("/admin/auth")
    }
   })

  return (
    <>
     <div className='flex'>
      <div className={`${showSidebar? "translate-x-0":"translate-x-[-25vw]"} transition-all ease-linear duration-300`}>
       <AdminSideBar page={page} setPage={setPage} setShowSidebar={setShowSidebar} showSidebar={showSidebar} /> 
      </div>
      <div className='absolute top-5 left-5'><NavbarShow setShowSidebar={setShowSidebar} showSidebar={showSidebar} /></div>
     

      <div className={`${showSidebar? "w-[75vw]":"w-[95vw] translate-x-[-12vw] "}`}>
        <AdminDashPage page={page} />
      </div>
     </div>
    </>
  )
}

export default AdminDashboard

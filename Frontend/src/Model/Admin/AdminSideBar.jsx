import React from 'react'
import SideBar1 from '../../Components/SideBar1'
import { useNavigate } from 'react-router-dom'

const AdminSideBar = ({setPage, setShowSidebar, showSidebar}) => {
  
    const items =[
        {
            name:"All Hotels",
            set: ()=> setPage("AllHotels")
        },
        {
            name:"All Bookings",
            set: ()=>setPage("AllBookings")
        },{
          name: "Add Admin",
          set: ()=> setPage("AddAdmin")
        }
    ]

    

  return (
    <>
      <SideBar1 details={items} setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
     
    </>
  )
}

export default AdminSideBar
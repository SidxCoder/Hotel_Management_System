import React from 'react'
import Bookings from './Bookings'
import AddHotel from '../../Pages/Owner/AddHotel'

import MyHotels from './MyHotels'
const DashboardPage = ({page}) => {
  
    if(page==="bookings") return <Bookings />
    else if(page==="add") return <AddHotel />
    else if(page === "myhotel") return <MyHotels />
    
}

export default DashboardPage
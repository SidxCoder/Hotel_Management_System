import React from 'react'
import AllBookings from './AllBookings'
import AllHotels from './AllHotels'
import AddAdmin from './AddAdmin'

const AdminDashPage = ({page}) => {
    if(page==="AllBookings") return <AllBookings/>
    else if(page==="AllHotels") return <AllHotels/>
    else if(page==="AddAdmin") return <AddAdmin/>
}

export default AdminDashPage

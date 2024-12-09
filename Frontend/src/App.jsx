 import React from 'react'
import Landing from './Pages/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAuth from './Pages/UserAuth';
import SellerAuth from './Pages/SellerAuth';
import AddHotel from './Pages/AddHotel';
import SellerDashboard from './Pages/SellerDashboard';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Landing />} />
      <Route path="/auth"  element={<UserAuth />} />
      <Route path="/seller/auth" element={<SellerAuth/>}></Route>
      <Route path="/seller/add" element={<AddHotel/>}></Route>
      <Route path="/seller/dashboard" element={<SellerDashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

 import React from 'react'
import Landing from './Pages/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAuth from './Pages/User/UserAuth';

import AddHotel from './Pages/Owner/AddHotel';
import SellerDashboard from './Pages/Owner/SellerDashboard';
import AdminAuth from './Pages/Admin/AdminAuth';
import SellerAuth from './Pages/Owner/SellerAuth';
import SearchPage from './Pages/User/SearchPage';
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
      <Route path="/admin/auth"element={<AdminAuth />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

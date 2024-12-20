import React, { useState } from 'react'
import axios from 'axios';
import Input from '../Components/Input';
import styles from "./AddHotel.module.css";
import { BACKEND_URL } from "../../config";
import Select, { Option } from "../Components/Select";
const SellerDashboard = () => {

     const [activeSection, setActiveSection]= useState('');
     const [formData, setFormData] = useState({
      name: '',
      area: '',
      city: '',
      state: '',
      price: '',
      unmarriedFriendly: false,
      image: '',
      AcRoomA: '',
      NonAcRoomA: '',
      TotalAc: '',
      TotalNonAc: '',
      status: '',
    });

  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/owner/updateHotel`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage(response.data.mmsg || 'Hotel updated successfully!');
    } catch (error) {
      console.error('Error updating hotel:', error);
      setMessage(
        error.response?.data?.msg || 'An error occurred while updating the hotel.'
      );
    }
  };

  return (
    <div className='min-h-screen m-0 p-0 box-border'>
       <div className="parts flex items-center h-[100vh] w-[97vw] ml-6 gap-4">
        <div className="part1   shadow-lg shadow-black  w-[20vw] h-[95vh] rounded-lg bg-gradient-to-t from-gray-400 to-red-100 ">
          <ul className='list-none text-center text-lg'>
            <li className='border-b-2 border-gray-400 h-24 flex items-center justify-center text-4xl'>RoomI<span className='text-red-600 '>Q</span></li>
            <li className='border-b-2 border-gray-400 h-12 flex items-center justify-center hover:text-white hover:bg-red-700 'onClick={()=>setActiveSection('bookings')}><a href="">Bookings</a></li>
            <li className='border-b-2 border-gray-400 h-12 flex items-center justify-center  hover:text-white hover:bg-red-700' onClick={()=>setActiveSection('editHotel')}><a href="">Edit Hotel</a></li>
          </ul>
        </div>
        <div className="part2  w-[80vw] h-[95vh] shadow-lg shadow-black rounded-lg bg-gradient-to-t from-gray-400 to-red-100 " >
           
        {activeSection === 'bookings' && (
            <div>
              <h1 className="text-2xl font-bold">Bookings</h1>
              <p>Here you can view all the bookings.</p>
            </div>
          )}

      {activeSection === 'editHotel' && (
        
        <div
    
        className={`${styles.hotelform} min-h-screen  bg-cover bg-center overflow-y-hidden  bg-gradient-to-t from-yellow-200 to-gray-300 `}
      >
        
        <h2 className="text-black text-5xl font-serif text-center my-4 font-bold selection:">
          Register your Hotel !
        </h2>
        <div
          className={` ${styles.form}  shadow-lg shadow-black  ml-[30%] w-[40%]  p-6 bg-gray-100 rounded-lg bg-gradient-to-t from-yellow-100 to-gray-400  `}
        >
          <div className="row1 flex w-[100%] gap-2 justify-center">
            <div className="row1p w-[50%]">
              <Input
                label="Name:"
                type="text"
                name="name"
                value={details.name}
                onChange={(e) => handleChange("name", e)}
                placeholder="Enter Hotel name"
                required
              />
            </div>
            <div className="row1p w-[50%]">
              <Input
                label="Area:"
                type="text"
                name="area"
                onChange={(e) => handleChange("area", e)}
                placeholder="Enter Hotel Area"
                required
              />
            </div>
          </div>
          <div className="row2 flex  w-[100%] gap-2 justify-center">
            <div className="row2p w-[50%]">
              <Input
                label="City:"
                type="text"
                name="city"
                onChange={(e) => handleChange("city", e)}
                placeholder="Enter Hotel City"
                required
              />
            </div>
            <div className="row2p w-[50%]">
              {" "}
              <Select title="State:" onChange={(e) => handleChange("state", e)}>
                <Option value="">Select</Option>
                {states.map((item, index) => (
                  <Option key={index} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="row3 flex  w-[100%] gap-2 justify-center">
            <div className="row3p w-[50%]">
              <Input
                label="Price:"
                type="number"
                name="price"
                onChange={(e) => handleChange("price", e)}
                placeholder="500"
                required
              />
            </div>
            <div className="row3p w-[50%]">
              <Select
                title="Unmarried Friendly:"
                onChange={(e) => handleChange("unmarriedFriendly", e)}
              >
                <Option value="">Select</Option>
                <Option value="true">Yes</Option>
                <Option value="false">No</Option>
              </Select>
            </div>
          </div>
  
          <Input
            label="Image:"
            type="file"
            name="Image"
            onChange={(e) => {
              setDetails({ ...details, image: e.target.files[0] });
            }}
            placeholder="Upload hotel Image"
            required
          />
          <div className="row5 flex  w-[100%] gap-2 justify-center">
            <div className="row5p w-[50%]">
              <Select
                title="Ac Room Available:"
                onChange={(e) => handleChange("AcRoomA", e)}
              >
                <Option value="">Select</Option>
                <Option value="true">Yes</Option>
                <Option value="false">No</Option>
              </Select>
            </div>
            <div className="row5p w-[50%]">
              <Select
                title=" Non-Ac Room Available:"
                onChange={(e) => handleChange("NonAcRoomA", e)}
              >
                <Option value="">Select</Option>
                <Option value="true">Yes</Option>
                <Option value="false">No</Option>
              </Select>
            </div>
          </div>
  
          <div className="row6 flex  w-[100%] gap-2 justify-center">
            <div className="row6p w-[50%]">
              {" "}
              <Input
                label="Total Ac Room:"
                type="number"
                name="total ac room"
                onChange={(e) => handleChange("TotalAc", e)}
                placeholder="5"
                required
              />
            </div>
            <div className="row6p w-[50%]">
              <Input
                label="Total Non-Ac Room:"
                type="number"
                name="total non-ac room"
                onChange={(e) => handleChange("TotalNonAc", e)}
                placeholder="5"
                required
              />
            </div>
          </div>
          <button
            className="w-[100%] rounded-b-lg text-white h-12 text-xl bg-green-700"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    
      )
    }

        </div>
       </div>
    </div>
  ) 
}

export default SellerDashboard

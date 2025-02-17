import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../../config';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { UserbookingCard } from '../../Components/HotelCard';
import { useNavigate } from 'react-router-dom';

const UserBookings = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    const fetchBookings = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/user/mybookings`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            console.log("API Response:", response.data);
            setData(response.data.bookings);
        } catch (err) {
            console.error("Error fetching bookings:", err);
            setError("Failed to fetch bookings. Please try again.");
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    return (
        <div className='flex flex-col items-center bg-ubook-bg bg-center bg-cover min-h-screen'>
            <IoArrowBackCircleSharp
                className='absolute left-6 top-6 text-5xl text-gray-800 cursor-pointer'
                onClick={() => navigate(-1)}
            />
            <h2 className='text-4xl text-black font-bold mt-5 mb-4'>My Bookings</h2>

            {loading ? (
                <p className="text-xl text-gray-600 mt-5">Loading bookings...</p>
            ) : error ? (
                <p className="text-xl text-red-500 mt-5">{error}</p>
            ) : data.length === 0 ? (
                <p className="text-xl text-gray-700 mt-5">No bookings found.</p>
            ) : (
                data.map((item, index) => <UserbookingCard key={index} item={item} />)
            )}
        </div>
    );s
};

export default UserBookings;

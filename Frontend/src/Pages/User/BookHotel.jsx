import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { BACKEND_URL } from "../../../config";

const BookHotel = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { searchDetails, hotelDetails } = location.state || {};

  if (!searchDetails || !hotelDetails) {
    navigate("/");
    return null;
  }

  const data = location.state;
  console.log(data);


  

  const handleConfirmBooking = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BACKEND_URL}/user/book`,
        {
          fromDate: searchDetails.fromDate,
          toDate: searchDetails.toDate,
          guests: searchDetails.guests,
          rooms: searchDetails.Rooms,
          bill: (parseInt(searchDetails.Rooms) * parseInt(hotelDetails.price)),
          RoomType: searchDetails.RoomType,
          hotelId: hotelDetails._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.msg || "Booking confirmed!");
      
      setTimeout(()=>{
        navigate("/bookingSuccessful")
      },1000)

    } catch (error) {
      console.error("Error confirming booking:", error);
      toast.error("Failed to confirm booking. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Hotel Booking Details</h1>

      {/* Hotel Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-[80%] max-w-3xl">
        <img
          src={hotelDetails.image}
          alt={hotelDetails.hotelName}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800">
          {hotelDetails.hotelName}
        </h2>
        <p className="text-gray-500">{hotelDetails.area}</p>
        <p className="mt-2 text-sm font-bold text-gray-700">
          Price: ₹{hotelDetails.price}
        </p>
        <p className="text-sm text-yellow-500">
          Rating: {hotelDetails.rating} ⭐⭐⭐⭐⭐
        </p>
      </div>

      {/* Search Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-[80%] max-w-3xl mt-6">
        <h3 className="text-lg font-semibold mb-4">Your Search Details</h3>
        <p className="text-gray-600">
          <strong>Location:</strong> {searchDetails.location}
        </p>
        <p className="text-gray-600">
          <strong>Check-in Date:</strong> {searchDetails.fromDate}
        </p>
        <p className="text-gray-600">
          <strong>Check-out Date:</strong> {searchDetails.toDate}
        </p>
        <p className="text-gray-600">
          <strong>Guests:</strong> {searchDetails.guests}
        </p>
        <p className="text-gray-600">
          <strong>Rooms:</strong> {searchDetails.Rooms}
        </p>
        <p className="text-gray-600">
          <strong>Bill:</strong> {parseInt(searchDetails.Rooms) * parseInt(hotelDetails.price)}
        </p>
        <p className="text-gray-600">
          <strong>Room Type:</strong> {searchDetails.RoomType}
        </p>
      </div>

      {/* Booking Action */}
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-green-600 transition duration-200"
        onClick={handleConfirmBooking}
      >
        Confirm Booking
      </button>
      <Toaster />
    </div>
  );
};

export default BookHotel;

import React from "react";

const HotelCard = ({ item, show,iswarn, buttonName,warnButtonClick, onButtonClick, isDeleting }) => {
  return (
    <div className="bg-white shadow-lg shadow-black rounded-lg overflow-hidden mt-6 w-[60vw] text-center flex">
      <img
        src={item.image}
        alt={item.hotelName}
        className="w-[30vw] h-60 object-cover"
      />

      <div className="p-4 ml-[15%]">
        <h2 className="text-lg font-semibold text-gray-800">
          {item.hotelName}
        </h2>
        <p className="text-sm text-gray-500">{item.area}</p>
        <p className="mt-2 text-sm font-bold text-gray-700">
          Price: <span className="text-green-600">₹</span> {item.price}
        </p>
        <p className="text-sm text-yellow-500">
          Rating: {item.rating} ⭐⭐⭐⭐⭐
        </p>
        <button
          className={`mt-4 w-full ${
            buttonName === "Edit"
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red"
          } text-white text-sm py-2  tracking-wider rounded-md transition duration-200
           ${
             isDeleting
               ? "bg-red-400 cursor-not-allowed"
               : "bg-red-600 hover:bg-red-700"
           } 
        flex items-center justify-center transition-all duration-300`}
          onClick={onButtonClick}
          disabled={isDeleting}
        >
          {isDeleting ? (
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            buttonName
          )}
        </button>
        {show && (
          <button className={` p-2 mt-3 w-40 bg-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300   ${
            iswarn
              ? "bg-yellow-400 cursor-not-allowed"
              : "bg-yellow-600 hover:bg-yellow-600"
          } `}onClick={warnButtonClick}>
            {iswarn ? (<span className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full"></span>)
            :("Warn")
            }
          
          </button>
        )}
      </div>
    </div>
  ); 
};

export default HotelCard;

export const AdminBookingCard = ({ item }) => {
  console.log(item);

  return (
    <div className="w-[70%] border-b flex justify-around p-2 items-center font-primary">
      <div
        className="w-32 h-32"
        style={{
          background: `url(${item.hotelId.image})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div>
        <ul>
          <li className="font-bold uppercase">Hotel Details</li>
          <li>Hotel Name: {item.hotelId.hotelName}</li>
          <li>Address: {item.hotelId.address}</li>
          <li>Price: {item.hotelId.price}</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-bold uppercase">User Details: </li>
          <li>Name: {item.bookedBy.name}</li>
          <li>Email: {item.bookedBy.email}</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-bold uppercase">Booking Details:</li>
          <li>From: {item.fromDate.slice(0, 10)}</li>
          <li>To: {item.toDate.slice(0, 10)}</li>
          <li>Rooms: {item.rooms}</li>
        </ul>
      </div>
    </div>
  );
};

export const UserbookingCard = ({ item }) => {
  if (!item || !item.hotelId) {
    return <p className="text-red-500">Invalid booking data</p>;
  }

  return (
    <div className="border p-4 rounded-lg shadow-gray-800  shadow-md bg-neutral-300 my-4 w-[50%]">
      <h2 className="text-lg font-bold">{item.hotelId.hotelName || "N/A"}</h2>
      <p>Location: {item.hotelId.area || "N/A"}, {item.hotelId.city || "N/A"}</p>
      <p>Price: <span className="text-green-800">₹ </span>{item.hotelId.price || "N/A"}</p>
      <p>Check-in: {item.fromDate ? item.fromDate.slice(0, 10) : "N/A"}</p>
      <p>Check-out: {item.toDate ? item.toDate.slice(0, 10) : "N/A"}</p>
      <div className="flex justify-between">
      <p>Rooms: {item.rooms || "N/A"}</p>
      <button className="bg-red-600 rounded text-white py-2 px-3">Cancel</button>
      </div>

    </div>
  );
};
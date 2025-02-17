import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../config";
import HotelCard from "../../Components/HotelCard";
import { toast, Toaster } from "sonner";
const AllHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingHotelId, setDeletingHotelId] = useState(null);
  const [warning , setWarning]= useState(null)

  useEffect(() => {
    async function fetchHotels() {
      try {
        const response = await axios.get(`${BACKEND_URL}/admin/allhotels/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setHotels(response.data.hotels);
      } catch (error) {
        setError("Failed to fetch hotels. Please try again later.");
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchHotels();
  }, []);
  const handleHotelDelete = async (id) => {
    setDeletingHotelId(id);
    try {
      const response = await axios.delete(`${BACKEND_URL}/admin/deleteHotel`, {
        data: { id: id },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Hotel deleted");

      setHotels((prevHotels) => prevHotels.filter((hotel) => hotel._id !== id));
    } catch (error) {
      toast.error("error while deleting hotel");
      console.log("error while deleted hotel", error);
    } finally {
      setDeletingHotelId(null);
    }
  };

  const handleHotelWarn = async (createdBy) => {
    setWarning(createdBy)
    try {
      const response = await axios.post(`${BACKEND_URL}/admin/sendWarning`,{createdBy},{
        
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
           
      toast.success("Warning Mail sent Successfully")
    } catch (error) {
      toast.error("error while sending warning mail");
      console.log("error while sending warning mail", error);
    }
    finally{
      setWarning(null)
    }
  };

  return (
    <div className="p-6 min-h-screen bg-yellow-50">
      {loading ? (
        <div className="text-center text-xl text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500 text-lg">{error}</div>
      ) : hotels.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No Hotels Added Yet
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {hotels.map((item, index) => (
            <HotelCard
              key={index}
              item={item}
              buttonName={
                deletingHotelId === item._id ? "Deleting..." : "Delete"
              }
              onButtonClick={() => handleHotelDelete(item._id)}
              isDeleting={deletingHotelId === item._id}
              iswarn={warning ===item.createdBy}
              show={true}
              warnButtonClick={() => handleHotelWarn(item.createdBy)}
            />
          ))}
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default AllHotels;

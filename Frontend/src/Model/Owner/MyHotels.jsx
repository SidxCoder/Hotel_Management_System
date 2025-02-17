import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../config";
import HotelCard from "../../Components/HotelCard";
import { useParams } from "react-router-dom";
import Input from "../../Components/Input";
import Select, { Option } from "../../Components/Select";

const MyHotels = () => {
  const { id } = useParams();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentHotel, setCurrentHotel] = useState(null);
  const [formData, setFormData] = useState({
    hotelName: "",
    price: "",
    area: "",
    city: "",
    state: "",
    unmarriedFriendly: "",
    AcRoomA: "",
    NonAcRoomA: "",
    TotalAc: "",
    TotalNonAc: "",
    status: "",
  });

  useEffect(() => {
    async function fetchHotels() {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/owner/myhotels/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setHotels(response.data.hotels);
      } catch (error) {
        setError("Failed to fetch hotels. Please try again later.");
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchHotels();
  }, [id]);

  const handleEditClick = (hotel) => {
    setCurrentHotel(hotel);
    setFormData(hotel);
    console.log("formData", formData);
    setIsDialogOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      // Exclude the image and rating field from the formData
      const { image, rating, ...updatedData } = formData;

      // Update the hotel without the image and rating
      await axios.put(
        `${BACKEND_URL}/owner/updatehotel/${currentHotel._id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // Update the hotels in the state
      setHotels((prevHotels) =>
        prevHotels.map((hotel) =>
          hotel._id === currentHotel._id ? { ...hotel, ...updatedData } : hotel
        )
      );
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Failed to update hotel:", error);
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
          {hotels.map((item) => (
            <HotelCard
              key={item.id}
              item={item}
              buttonName="Edit"
              onButtonClick={() => handleEditClick(item)}
            />
          ))}
        </div>
      )}

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-bold mb-4">Update Hotel Details</h2>
            <form>
              <Input
                label="HotelName:- "
                name="hotelName"
                value={formData.hotelName}
                onChange={handleChange}
                placeholder="Hotel Name"
              />
              <Input
                label="price:- "
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
              />
              <Input
                label="Area:- "
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Area"
              />
              <Input
                label="City:- "
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
              <Input
                label="State:- "
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
              />
              <Select
                title="unmarriedFriendly:- "
                name="unmarriedFriendly"
                value={formData.unmarriedFriendly}
                onChange={handleChange}
                // options={[
                //   { value: "", label: "Unmarried Friendly" },
                //   { value: "true", label: "Yes" },
                //   { value: "false", label: "No" },
                // ]}
              >
                <Option value="">Select</Option>
                <Option value="true">Yes</Option>
                <Option value="false">No</Option>
              </Select>

              <Select
                title="Ac Room Available:- "
                name="AcRoomA"
                value={formData.AcRoomA}
                onChange={handleChange}
                // option={[
                //   { value: "", label: "AC Room Available" },
                //   { value: "true", label: "Yes" },
                //   { value: "false", label: "No" },
                // ]}
              >
                <Option value="">Select</Option>
                <Option value="true">Yes</Option>
                <Option value="false">No</Option>
              </Select>
              <Select
                title=" Non-Ac Room Available:- "
                name="NonAcRoomA"
                value={formData.NonAcRoomA}
                onChange={handleChange}
                // options={[
                //   { value: "", label: "Non-AC Room Available" },
                //   { value: "true", label: "Yes" },
                //   { value: "false", label: "No" },
                // ]}
                >
                   <Option value="">Select</Option>
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
                </Select>
              
              <Input
               label="Total Ac Room:- "
                type="number"
                name="TotalAc"
                value={formData.TotalAc}
                onChange={handleChange}
                placeholder="Total AC Rooms"
              />
              <Input
               label="Total Non-Ac Room:- "
                type="number"
                name="TotalNonAc"
                value={formData.TotalNonAc}
                onChange={handleChange}
                placeholder="Total Non-AC Rooms"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={handleUpdate}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyHotels;

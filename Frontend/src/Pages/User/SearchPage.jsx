import axios from "axios";
import React from "react";
import Navbar from "../../Components/Navbar";
import styles from "../../Components/Header.module.css";
import { useSelector } from "react-redux";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../../config";
import HotelCard from "../../Components/HotelCard";
const SearchPage = () => {
  const items = useSelector((state) => state);
  const [loading, setLoading] = React.useState(true);
  const [hotels, setHotels] = React.useState([]);
  const navigate = useNavigate();
  function BookNow(item) {
    let data = {
      searchDetails: items.searchDetails,
      hotelDetails: item
    };
    navigate("/booknow", { state: data });
  }

  React.useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.post(
          `${BACKEND_URL}/user/search`,
          items.searchDetails
        );
        setHotels(response.data);
        console.log("response from data of search ", response.data);
        setLoading(false);
      } catch (error) {
        toast.error("error while searching hotel");
      }
    };
    fetchHotels();
  }, []);
  console.log(items);
  return (
    <>
      <div className=" bg-black h-[10vh] sticky top-0 z-10">
        <Navbar />
      </div>

      <Toaster />
      {loading ? (
        <div>LOADING...</div>
      ) : (
        <div className="mt-1">
          <h1 className="text-center font-bold text-2xl">
            {hotels.length} Hotels found in {items.searchDetails.location}
          </h1>
          {hotels.length > 0 ? (
            <div className="flex-col ml-[20%] h-auto gap-4">
              {hotels.map((hotel, index) => (
                <HotelCard
                  key={index}
                  item={hotel}
                  buttonName="Book Now"
                  onButtonClick={() => {
                    BookNow(hotel);
                  }}
                />
              ))}
            </div>
          ) : (
            <p>No hotels found. Please try a different search.</p>
          )}
        </div>
      )}
    </>
  );
};

export default SearchPage;

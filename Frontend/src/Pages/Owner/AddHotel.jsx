import React, { useState } from "react";
import Input from "../../Components/Input";
import Select, { Option } from "../../Components/Select";
import { BACKEND_URL } from "../../../config";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import styles from "./AddHotel.module.css";

const AddHotel = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    hotelName: "",
    area: "",
    city: "",
    state: "",
    price: null,
    unmarriedFriendly: null,
    image: null,
    AcRoomA: null,
    NonAcRoomA: null,
    TotalAc: null,
    TotalNonAc: null,
  });

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  function handleChange(type, e) {
    let value = e.target.value;
    setDetails({
      ...details,
      [type]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("hotelName", details.hotelName);
    formData.append("area", details.area);
    formData.append("city", details.city);
    formData.append("state", details.state);
    formData.append("price", parseInt(details.price));
    formData.append("unmarriedFriendly", details.unmarriedFriendly);
    formData.append("file", details.image);
    formData.append("AcRoomA", details.AcRoomA);
    formData.append("NonAcRoomA",  details.NonAcRoomA);
    formData.append("TotalAc", parseInt(details.TotalAc));
    formData.append("TotalNonAc",  parseInt(details.TotalNonAc));

    try {
      const response = await axios.post(
        `${BACKEND_URL}/owner/addhotel`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("hotel added");
      setTimeout(() => {
        navigate("/seller/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("error while adding hotel");
      console.log("error while adding hotel", error);
    }
  } 
  return (
    <div
    
      className={`${styles.hotelform} min-h-screen  bg-cover bg-center overflow-y-hidden w-[80vw]   bg-yellow-100`}
    >
      <Toaster />
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
              onChange={(e) => handleChange("hotelName", e)}
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
          className="w-[100%] rounded-b-lg text-white h-12 text-xl bg-red-600"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default AddHotel;

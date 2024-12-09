import React, { useState } from "react";
import Input from "../Components/Input";
import Select, { Option } from "../Components/Select";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import styles from "./AddHotel.module.css";

const AddHotel = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
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
    setDetails({
      ...details,
      [type]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault(); 
    let formData = new FormData();
    formData.append("name", details.name);
    formData.append("area", details.area);
    formData.append("city", details.city);
    formData.append("state", details.state);
    formData.append("price", Number(details.price));
    formData.append("unmarriedFriendly", details.unmarriedFriendly);
    formData.append("file", details.image);
    formData.append("AcRoomA", details.AcRoomA);
    formData.append("NonAcRoomA", details.NonAcRoomA);
    formData.append("TotalA", details.TotalAc);
    formData.append("TotalNonAc", details.TotalNonAc);
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
      className={`${styles.hotelform} min-h-screen  overflow-y-hidden bg-gradient-to-t from-gray-100 to-gray-300 `}
    >
      <Toaster />
      <h2 className="text-black text-5xl font-serif text-center my-4 font-bold selection:">
        Register your Hotel !
      </h2>
      <div
        className={` ${styles.form}  shadow-lg shadow-black text-center ml-[30%] w-[40%]  pt-2 bg-gray-100 rounded-lg `}
      >
        <Input
          label="Name:"
          type="text"
          name="name"
          value={details.name}
          onChange={(e) => handleChange("name", e)}
          placeholder="Enter Hotel name"
          required
        />
        <Input
          label="Area:"
          type="text"
          name="area"
          onChange={(e) => handleChange("area", e)}
          placeholder="Enter Hotel Area"
          required
        />
        <Input
          label="City:"
          type="text"
          name="city"
          onChange={(e) => handleChange("city", e)}
          placeholder="Enter Hotel City"
          required
        />
        <Select
          title="State:"
          value={details.item}
          onChange={(e) => setDetails({ ...details, state: e.target.value })}
        >
          <Option value="">Select</Option>
          {states.map((item, index) => (
            <Option key={index} value={item}>
              {item}
            </Option>
          ))}
        </Select>
        <Input
          label="Price:"
          type="number"
          name="price"
          onChange={(e) => handleChange("price", e)}
          placeholder="500"
          required
        />
        <Select title="Unmarried Friendly:"  onChange={(e) => handleChange("Unmarried Friendly", e)}>
          <Option value="true">Yes</Option>
          <Option value="false">No</Option>
        </Select>

        <Input
          label="Image:"
          type="file"
          name="image"
          onChange={(e) => setDetails({ ...details, image: e.target.files[0] })}
          placeholder="Upload hotel Image"
          required
        />
        <Select title="Ac Room Available:" onChange={(e) => handleChange("Ac Room Available", e)}>
          <Option value="true">Yes</Option>
          <Option value="false">No</Option>
        </Select>
        <Select title=" Non-Ac Room Available:"  onChange={(e) => handleChange(" Non Ac Room Available", e)}>
          <Option value="true">Yes</Option>
          <Option value="false">No</Option>
        </Select>

        <Input
          label="Total Ac Room:"
          type="number"
          name="total ac room"
          onChange={(e) => handleChange("TotalAc", e)}
          placeholder="5"
          required
        />
        <Input
          label="Total Non-Ac Room:"
          type="number"
          name="total non-ac room"
          onChange={(e) => handleChange("TotalNonAc", e)}
          placeholder="5"
          required
        />
        <button
          className="w-[100%] rounded-b-lg text-white h-12 text-xl bg-green-700"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default AddHotel;

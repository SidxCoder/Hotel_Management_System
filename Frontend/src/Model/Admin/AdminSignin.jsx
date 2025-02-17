import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input";
import styles from "../Sign.module.css";
import { BACKEND_URL } from "../../../config";
import axios from "axios";
import { Toaster, toast } from "sonner";


const AdminSignin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (type, e) => {
    setFormData({
      ...formData,
      [type]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URL}/admin/signin`,
        formData
      );
      toast.success("signin Successful");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("type", "admin");
    
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("invalid credentials");
      console.log(error);
    }
  }

  return (
    <div className="bg-neutral-800 min-h-screen">
      <h1 className="float-left text-5xl mt-10 ml-10 font-bold text-white">RoomI<span className="text-red-600">Q</span></h1>
    <div className={` ${styles.sellersignin} min-h-screen bg-admin-s-bg bg-cover w-[65vw] float-end bg-center pt-8`}>
      
      <form onSubmit={handleSubmit} className="shadow-white text-white shadow-md float-start absolute left-28 top-44">
      <h2 className="text-white">Admin Signin</h2>
        <Input
          label="Username"
          type="name"
          placeholder="Enter your username"
          onChange={(e) => handleChange("username", e)}
          name="username"
          id="username"
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => handleChange("password", e)}
          name="Password"
          id="password"
          required
        />
        <button
          className="py-1 px-2  mb-5 w-[40%] bg-green-600  mt-5 text-white border-2 rounded-lg"
          type="submit"
        >
          Signin
        </button>
      </form>
      <Toaster />
    </div>
    </div>
  );
};

export default AdminSignin;

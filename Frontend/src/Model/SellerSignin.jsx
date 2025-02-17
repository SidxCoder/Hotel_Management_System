import React, { useState } from "react";
import Input from "../Components/Input";
import styles from "./Sign.module.css";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { Toaster, toast } from "sonner";
const SellerSignin = ({ authType }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
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
        `${BACKEND_URL}/owner/signin`,
        formData
      );
      toast.success("signin Successful");
      console.log(response.data)
      localStorage.setItem("ownername",response.data.ownername)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("type","owner")
      setTimeout(() => {
        navigate("/seller/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("invalid credentials");
      console.log(error);
    }
  }
  return (
    <div className={` ${styles.sellersignin}  bg-sign-bg bg-cover bg-center min-h-screen  pt-8`}>
      
      <form onSubmit={handleSubmit} className="shadow-lg shadow-black bg-yellow-100 brightness-95 text-black    absolute top-44 right-[15%]">
      <h2 className=" text-gray-800" >Signin</h2>
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => handleChange("email", e)}
          name="Email"
          id="email"
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
          className="py-1 px-4 w-[70%] mb-2 mt-2 text-white bg-red-600 border-2 rounded-lg"
          type="submit"
        >
          
          Signin
        </button>
        <p className="text-black">
          Don't have an account?
          <a onClick={() => authType("signup")}> Sign up</a>
        </p>
      </form>
      <Toaster />

      <h1 className="text-5xl absolute left-10 font-extrabold text-neutral-800" >RoomI<span className="text-red-700 ">Q</span></h1>

      <div className="absolute left-[15%] top-[30%] w-[40%]">
        <h1 className=" w-[95%] text-yellow-100 text-5xl font-bold " >There’s a smarter way to RoomI<span className="text-red-700">Q</span> around </h1>
        <p className="w-[90%] font-bold text-yellow-100 text-md mt-3">Sign up with your phone number and get exclusive access to discounts and savings on RoomI<span className="text-red-700">Q</span> stays and with our many travel partners.</p>
      </div>
    </div>
  );
};

export default SellerSignin;

import React, { useState } from "react";
import Input from "../Components/Input";
import styles from "./Sign.module.css"
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
const SellerSignin = ({authType}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    idProof: "",
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
        `${BACKEND_URL}/owner/signup`,
        formData
      );
      localStorage.setItem("ownername",response.data.ownername)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("type","owner")
      toast.success("Signup Successful");
      setTimeout(() => {
        navigate("/seller/add");
      }, 2000);
    } catch (error) {
      console.error("error", error);

      toast.error("Invalid credentials");
    }
  }
  return (
    <div className={` ${styles.sellersignup} bg-sign-bg bg-cover bg-center  min-h-screen   pt-8`}>
     
      <form onSubmit={handleSubmit} className="shadow-lg shadow-black bg-yellow-100 brightness-95 text-black    absolute right-[15%]">
      <h2 className=" text-gray-800">Signup</h2>

        <Input
          label="Name"
          type="text"
          name="name"
          onChange={(e) => handleChange("name", e)}
          placeholder="Enter your name"
          required
        />
        <Input 
          label="Phone"
          type="number"
          name="phone"
          onChange={(e) => handleChange("phone", e)}
          placeholder="Enter your Ph-number"
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          onChange={(e) => handleChange("email", e)}
          placeholder="Enter your email"
          required
        />
        <Input
          label="Id Proof"
          type="text"
          name="idProof"
          onChange={(e) => handleChange("idProof", e)}
          placeholder="Upload your ID Proof"
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          onChange={(e) => handleChange("password", e)}
          placeholder="Enter your password"
          required
        />
        <button
          className="py-1 px-4 w-[70%] mb-2 mt-2 text-white bg-red-600 border-2 rounded-lg"
          type="submit"
        >
          Signup
        </button>
        <p className="text-black">
        Already have an account?
         <a onClick={()=>authType("signin")}> Sign in</a>
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

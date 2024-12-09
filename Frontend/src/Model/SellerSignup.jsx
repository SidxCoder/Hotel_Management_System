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
      localStorage.setItem("ownername",response.data.name)
      localStorage.setItem("token", response.data.token);
      
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
    <div className={` ${styles.sellersignup} bg-black min-h-screen  pt-8`}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
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
          className="py-1 px-2 mb-2 mt-2 text-white border-2 rounded-lg"
          type="submit"
        >
          Signup
        </button>
        <p>
        Already have an account?
         <a onClick={()=>authType("signin")}> Sign in</a>
        </p>
      </form>
      <Toaster />
    </div>
  );
};

export default SellerSignin;

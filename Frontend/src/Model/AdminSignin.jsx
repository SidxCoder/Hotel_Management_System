import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import styles from "./Sign.module.css";
import { BACKEND_URL } from "../../config";
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

      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("invalid credentials");
      console.log(error);
    }
  }

  return (
    <div className={` ${styles.sellersignin} bg-black min-h-screen  pt-8`}>
      <h2>Admin Signin</h2>
      <form onSubmit={handleSubmit}>
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
          className="py-1 px-2 mb-2 mt-2 text-white border-2 rounded-lg"
          type="submit"
        >
          Signin
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default AdminSignin;

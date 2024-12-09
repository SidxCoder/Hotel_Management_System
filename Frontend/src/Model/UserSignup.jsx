import React, { useState } from "react";
import Input from "../Components/Input";
import { BACKEND_URL } from "../../config";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Sign.module.css"

const UserSignup = ({position}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChange(type, e) {
    setFormData({
      ...formData,
      [type]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault(); 
    try {
      const response = await axios.post(`${BACKEND_URL}/user/signup`, formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username",response.data.username)
      toast.success("Signup Successful");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Invalid credentials");
      console.error("Error while signing up", error);
    }
  }

  return (
    
    <div className={` ${styles.userform} ${styles.Usignup}`}>
    
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name:"
          type="text"
          name="name"
          onChange={(e) => handleChange("name", e)}
          placeholder="Enter your name"
          required
        />
        <Input
          label="Username:"
          type="text"
          name="username"
          onChange={(e) => handleChange("username", e)}
          placeholder="Enter your username"
          required
        />
        <Input
          label="Email:"
          type="email"
          name="email"
          onChange={(e) => handleChange("email", e)}
          placeholder="Enter your email"
          required
        />
        <Input
          label="Password:"
          type="password"
          name="password"
          onChange={(e) => handleChange("password", e)}
          placeholder="Enter your password"
          required
        />
        <button className={`${styles.btn}`} type="submit">Signup</button>
        <p>
        Already have an account?
         <a onClick={()=>position("signin")}> Sign in</a>
        </p>
      </form>
      <Toaster />
    </div>
  );
};

export default UserSignup;

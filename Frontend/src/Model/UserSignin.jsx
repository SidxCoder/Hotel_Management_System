import React, { useState } from "react";
import Input from "../Components/Input";
import { Link ,useNavigate} from "react-router-dom";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import {Toaster, toast } from "sonner";
import styles from "./Sign.module.css"

const UserSignin = ({position}) => {
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
      const response = await axios.post(`${BACKEND_URL}/user/signin`,formData)
      console.log(response.data)
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("username",response.data.username)
      localStorage.setItem("type","user")
      toast.success("Signin Successful");
      setTimeout(()=>{
        navigate("/")
      },2000)
   } catch (error) {
      toast.error("invalid credntials")
      console.log(("error while signing in",error));
      
   }
  };

  return (
   
      <div className={` ${styles.userform} ${styles.Usignin} mt-24 `}>
       
        <form onSubmit={handleSubmit} className="shadow-lg shadow-white text-white">
        <h2 className="text-white">Signin</h2>
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
          <button className={`${styles.btn} text-white`} type="submit">Signin</button>
          <p className="text-white">
            Don't have an account?
            <a onClick={()=>position("signup")}> Sign up</a>
          </p>
        </form>
        <Toaster/>
      </div>
    
  );
};

export default UserSignin;

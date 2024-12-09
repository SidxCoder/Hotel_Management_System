import React,{useState} from 'react'
import Input from "../Components/Input";
import styles from "./Sign.module.css"
import { Link ,useNavigate} from "react-router-dom";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import {Toaster, toast } from "sonner";
const SellerSignin = ({authType}) => {
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

async function handleSubmit(e){
  e.preventDefault();
    try {
        const response = await axios.post(`${BACKEND_URL}/owner/signin`,formData)
        toast.success("signin Successful")
        // localStorage.setItem("ownername",response.data.name)
        localStorage.setItem("token", response.data.token)
       
        setTimeout(()=>{
            navigate("/seller/dashboard")
        },2000)
    } catch (error) {
        toast.error("invalid credentials")
        console.log(error);
        
    }
}
  return (
    <div className={` ${styles.sellersignin} bg-black min-h-screen  pt-8`}>
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
      <Input label="Email" type="email" placeholder="Enter your email"  onChange={(e) => handleChange("email", e)}  name="Email" id="email" required />
      <Input label="Password" type="password" placeholder="Enter your password"  onChange={(e) => handleChange("password", e)}  name="Password" id="password"  required/>
      <button
          className="py-1 px-2 mb-2 mt-2 text-white border-2 rounded-lg"
          type="submit"
        > Signin </button>
       <p>
          Don't have an account?{" "}
          <a onClick={() => authType("signup")}>
            Sign up
          </a>
        </p>

      </form>
      <Toaster/>
    </div>
  )
}

export default SellerSignin

import React, { useState } from "react";
import "../../style.css";
import logo from "../../image/Sewa_Asri.png";
import google from "../../image/google.png";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://127.0.0.1:3000/api/v1/login',{
      email:email,
      password:password
    }).then((data)=>{
      console.log(data)
      if(data.status === 200){
        swal({
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        Navigate('/')
      }
   
      
    }).catch(err=>{
      console.error(err)
    })
    
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        className="flex items-center justify-center flex-col "
        onSubmit={handleSubmit}
      >
        <img src={logo} alt="Sewa Asri logo" className="w-32 mb-7" />
        <label className="text-left w-full ">Email</label>
        <input
          type="email"
          name="email"
          id=""
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-3"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="you@gmail.com"
        />
        <label className="text-left w-full">Password</label>
         <input
          type="password"
          name="password"
          id=""
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-3"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="*******"
        />
        
        <button
          className="text-white bg-[#40BF40] p-2 w-[15rem] rounded-2xl"
          type="submit"
          id="register"
        >
          Masuk
        </button>
        <span className="mt-1 mb-1">atau</span>
        <button
          className="border border-[#cccc] p-2 w-[15rem] rounded-2xl flex gap-2 justify-center items-center"
          type="button"
          id="signGoogle"
        >
          <img src={google} alt="google-logo" className="w-6" />
          Lanjutkan dengan google
        </button>
        <p className="text-sm mt-3">Don't have an account? <a href="/register" className="text-[#40BF40]">Sign Up</a></p>

      </form>
    </div>
  );
}

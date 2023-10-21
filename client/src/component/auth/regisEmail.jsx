import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import "../../style.css";
import logo from "../../image/Sewa_Asri.png";
import google from "../../image/google.png";
import Password from '../auth/regisPass';

export default function Register() {
  const [email,setEmail] = useState("")
  const navigate  = useNavigate();
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    <Password email={email}/>;
    navigate("/password");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <img src={logo} alt="Sewa Asri logo" className="w-40 mb-4" />
      <form
        className="flex items-center justify-center flex-col gap-3"
        onSubmit={handleSubmit}
      >
        
        <label className="text-left w-full">Email</label>
        <input
          type="email"
          name="email"
          id=""
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="you@gmail.com"
        />
        <button
          className="text-white bg-[#40BF40] p-2 w-[15rem] rounded-2xl"
          type="submit"
          id="register"
        >
          Buat akun
        </button>
        <span>atau</span>
        <button
          className=" border p-2 w-[15rem] rounded-2xl flex gap-2 justify-center items-center"
          type="button"
          id="signGoogle"
        >
          <img src={google}alt="google-logo" className="w-6" />
          Lanjutkan dengan google
        </button>
      </form>
    </div>
  );
}

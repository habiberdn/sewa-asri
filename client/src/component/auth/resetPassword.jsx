import React, { useState } from "react";
import logo from "../../image/Sewa_Asri.png";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function ResetPassword() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const [input, setInput] = useState({
    newPassword: "",
    password: "",
    passConfirm: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async () => {
   const data= await axios.get(`http://127.0.0.1:3000/api/v1/user/${email}`);
   if(data.data.getUser.password  === input.password && input.newPassword === input.passConfirm){
        const newPw = await axios.patch('http://127.0.0.1:3000/api/v1/resetPassword')
   }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f1f2f2]">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col bg-[#ffff] rounded-2xl p-[2rem]"
      >
        <img src={logo} alt="Sewa Asri logo" className="w-32 mb-7" />

        <label className="w-full text-left">Current Password</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-1 mt-3"
          placeholder="*******"
          value={input.currentpw}
        />
        <label className="w-full text-left">New Password</label>
        <input
          name="Newpassword"
          onChange={handleChange}
          type="password"
          placeholder="*******"
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-1 mt-3"
          value={input.password}
        />
        <label className="w-full text-left">Pasword Confirm</label>
        <input
          name="passConfirm"
          onChange={handleChange}
          type="password"
          placeholder="*******"
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-1 mt-3"
          value={input.passConfirm}
        />
        <button
          className="text-white bg-[#40BF40] p-2 w-[15rem] rounded-2xl"
          type="submit"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}

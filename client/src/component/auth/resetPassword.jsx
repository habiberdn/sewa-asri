import React, { useState } from "react";
import logo from "../../image/Sewa_Asri.png";

export default function ResetPassword() {
  const [input, setInput] = useState({
    currentpw: "",
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
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f1f2f2]">
      <form
        action=""
        className="flex items-center justify-center flex-col bg-[#ffff] rounded-2xl p-[2rem]"
      >
        <img src={logo} alt="Sewa Asri logo" className="w-32 mb-7" />

        <label className="w-full text-left">Current Password</label>
        <input
          name="currentpw"
          onChange={handleChange}
          type="password"
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-1 mt-3"
          placeholder="*******"
        />
        <label className="w-full text-left">New Password</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="*******"
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-1 mt-3"
        />
        <label className="w-full text-left">Pasword Confirm</label>
        <input
          name="passConfirm"
          onChange={handleChange}
          type="password"
          placeholder="*******"
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-1 mt-3"
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

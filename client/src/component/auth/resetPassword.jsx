import React, { useState } from "react";
import logo from "../../image/Sewa_Asri.png";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function ResetPassword() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  console.log(token);
  const Navigate = useNavigate();

  const [input, setInput] = useState({
    password: "",
    passConfirm: "",
  });
  const [error, setError] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  console.log(input.password,input.passConfirm)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await axios.patch(`http://127.0.0.1:3000/api/v1/user/resetPassword/${token}`, {
        password: input.password,
        passwordConfirm : input.passConfirm
      });
      swal({
        icon: "success",
        title: "Password already changed!",
        showConfirmButton: false,
        timer: 1500,
      });
      Navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
      
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

        <label className="w-full text-left">New Password</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="*******"
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-1 mt-3"
          value={input.password}
          required
        />
        <label className="w-full text-left">Pasword Confirm</label>
        <input
          name="passConfirm"
          onChange={handleChange}
          type="password"
          placeholder="*******"
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-1 mt-3"
          value={input.passConfirm}
          required
        />
        {error && (
          <div className="text-[0.8rem] w-full text-left text-[#ee4d2d] ">
            {error}
          </div>
        )}
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

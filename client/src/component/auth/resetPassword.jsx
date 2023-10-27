import React, { useState } from "react";
import logo from "../../image/Sewa_Asri.png";
import axios from "axios";
import { useLocation,useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function ResetPassword() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  console.log(email);
  const Navigate = useNavigate();

  const [input, setInput] = useState({
    password: "",
    passConfirm: "",
  });
  const [error, setError] = useState(false);
  const [token,setToken] = useState(false)

  function handleChange(event) {
    const { value, name } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const isExpired = async () => {
    const expired = await axios.get(
      `http://127.0.0.1:3000/api/v1/user/${email}`
    );
    if(expired.data.getUser.passwordResetExpires < new Date(Date.now())){
      setTimeout(()=>{
        alert('Token is expired!')
      },1500)
      Navigate('/login')
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.get(`http://127.0.0.1:3000/api/v1/user/${email}`);
    console.log(data.data.getUser.password);
    console.log(input.password);
    console.log(input.passConfirm);

    if (input.password === input.passConfirm) {
      try {
        console.log("masuk");
        await axios.patch("http://127.0.0.1:3000/api/v1/resetPassword", {
          email: email,
          password: input.password,
        });
        swal({
          icon: "success",
          title: "Password already changed!",
          showConfirmButton: false,
          timer: 1500,
        });
        Navigate("/login");
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("gmasuk");

      setError(true);
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
      {setTimeout(()=>{
        isExpired()
      },600000)}
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
            Password aren't correct or new password not same!
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

import React from "react";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f1f2f2]">

      <form className="backdrop-blur-sm flex items-center justify-center flex-col bg-[#ffff] rounded-2xl p-[2rem] gap-2  ">
      <h1 className="text-[1rem] mb-2"><b>Forgot Password</b></h1>

        <label className="text-left w-full">Email</label>
        <input
          type="email"
          name="email"
          id=""
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-2"
          required
          placeholder="you@gmail.com"
        />
        <button type="submit"  className="text-white bg-[#40BF40] p-2 w-[15rem] rounded-2xl">Continue</button>
      </form>
    </div>
  );
}

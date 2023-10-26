import React, { useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';

export default function ForgotPassword() {
  const Navigate = useNavigate();
  const [email,setEmail] =useState()
  const [isSubmit,setSubmit] =useState(false)

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setSubmit(true)
    const data = await Axios.get(`http://127.0.0.1:3000/api/v1/user/${email.email}`)
    console.log(data.data.getUser.email)
    if(data.data.getUser.email === email.email){
      try{
       const post =  await Axios.post('http://127.0.0.1:3000/api/v1/forgotPassword',{
         email:email.email
        })
       console.log(post)
        Navigate(`/forgotPassword/token?email=${email.email}`,{
          email:email
        })
      }catch(err){
        console.log(err)
      }
    }
  }

  const handleChange = async(e)=>{
    const {value,name} = e.target
    setEmail(prev =>({
      ...prev,
      [name]:value
    }))
  }
  return (
    <div onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen bg-[#f1f2f2]">

      <form className="backdrop-blur-sm flex items-center justify-center flex-col bg-[#ffff] rounded-2xl p-[2rem] gap-2">
      <h1 className="text-[1rem] mb-2"><b>Forgot Password</b></h1>

        <label className="text-left w-full">Email</label>
        <input
          type="email"
          name="email"
          id=""
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-2"
          required
          onChange={handleChange}
          placeholder="you@gmail.com"
        />
        <button type="submit" className="text-white bg-[#40BF40] p-2 w-[15rem] rounded-2xl">
        {isSubmit? <div className="flex justify-center"><ReactLoading height={30} width={40} /></div>: "Continue" }
        </button>
      </form>
    </div>
  );
}

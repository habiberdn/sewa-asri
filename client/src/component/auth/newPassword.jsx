import React,{useState} from "react";
import logo from "../../image/Sewa_Asri.png";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function NewPasswrod() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
  const Navigate = useNavigate();

    const [token,setToken] =useState()
    const [error,setError] = useState(false)
    

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = await Axios.get(`http://127.0.0.1:3000/api/v1/user/${email}`)
        if( new Date(Date.now())>data.data.getUser.passwordResetExpires){
          console.log('benarr')
        }
        console.log(data.data.getUser.passwordResetExpires)
        console.log(new Date(Date.now()))
        if(data.data.getUser.passwordResetToken  === token){
           Navigate(`/resetPassword?email=${email}`)
        }
        if(!data.data.getUser.passwordResetToken ||  !(new Date(Date.now())<data.data.getUser.passwordResetExpires)){
          return setError(true);
        }
        else{
          setError(true)
        }
    }
  return  (
  <div className="flex flex-col justify-center items-center h-screen bg-[#f1f2f2]">
  <form onSubmit={handleSubmit}
    className="backdrop-blur-sm flex items-center justify-center flex-col bg-[#ffff] rounded-2xl p-[2rem]  "
    
  >
    <img src={logo} alt="Sewa Asri logo" className="w-32 mb-7" />
    <h1 className="text-xs ">Token already sent to your mailtrap!</h1>
    <input
      type="text"
      name="email"
      id=""
      className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-1 mt-3"
      required
     placeholder="Input token"
     onChange={(e)=>{
        setToken(e.target.value)
     }}
    />
    {error && <p className="text-[0.8rem] w-full text-left text-[#ee4d2d] ">Token is invalid or has expired</p>}
    <button
      className="text-white bg-[#40BF40] p-2 w-[15rem] rounded-2xl"
      type="submit"
      id="register"
    >
     Continue
    </button>
    
  </form>
</div>)
}

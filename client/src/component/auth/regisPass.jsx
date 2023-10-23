import React,{useState} from "react";

export default function Password() {
   
    const [input, setInput] = useState({
      password: '',
      confirmPassword: ''
    });

    const [error, setError] = useState({
      password: '',
      confirmPassword: ''
    })

    function handleChange(event){
      const {value,name} = event.target
      setInput(prev => ({
        ...prev,
        [name]: value
      }));
      validateInput(event);
    }

    const validateInput = e => {
      let { name, value } = e.target;
      setError(prev => {
        const stateObj = { ...prev, [name]: "" };
   
        switch (name) {
          case "username":
            if(!value){
              stateObj[name] = "Please Input Email.";
            }
            break
          case "password":
            if (!value) {
              stateObj[name] = "Please enter Password.";
            } else if (input.confirmPassword && value !== input.confirmPassword) {
              stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
            } else {
              stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
            }
            break;
   
          case "confirmPassword":
            if (!value) {
              stateObj[name] = "Please enter Confirm Password.";
            } else if (input.password && value !== input.password) {
              stateObj[name] = "Password and Confirm Password does not match.";
            }
            break;
   
          default:
            break;
        }
   
        return stateObj;
      });
    }
   
  return (
    <div className="flex flex-col justify-center items-center mt-16 h-screen" >
        <label className="text-left w-full">Buat Password</label>
        <input
          type="password"
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5"
          placeholder="*******"
          required
          onChange={handleChange}
          value={input.password}
          name="password"
          onBlur={validateInput}
        />
           {error.password && <span className='text-red-600 text-left text-sm w-full'>{error.password}</span>}
        
        <label className="text-left w-full">Ketik Ulang Password</label>
        <input
          type="password"
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5"
          placeholder="*******"
          required
          value={input.confirmPassword}
          onBlur={validateInput}
          onChange={handleChange}
          name="confirmPassword"
        />
           {error.confirmPassword && <span className='text-red-600 text-left text-sm w-full'>{error.confirmPassword}</span>}
 
        <button
          type="submit"
          className="text-white bg-[#40BF40] p-2 w-[15rem] rounded-2xl"
        >
          Sign Up
        </button>
      </div>
  );
}

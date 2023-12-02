import React, { useState } from "react";
import "../../style.css";
import logo from "../../image/Sewa_Asri.png";
import google from "../../image/google.png";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import swal from "sweetalert";

export default function Register() {
  const [inPassword, setInPassword] = useState(false)
  const Navigate = useNavigate()

  const [input, setInput] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const [state, setState] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.password !== input.passwordConfirm) {
      Navigate('/register');
      return swal({
        icon: "error",
        title: "Oops...",
        text: "Email or/and password  wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    console.log(input.email, input.password, input.passwordConfirm)
    Axios.post('http://127.0.0.1:3000/api/v1/user/signup', {
      email: input.email,
      password: input.password,
      passwordConfirm: input.passwordConfirm
    }).then(data => {
      console.log(data)
      if (data.status === 201) {
        swal({
          icon: "success",
          title: "Account already created, please log in!",
          showConfirmButton: false,
          timer: 1500,
        });
        Navigate('/login')
      }
      // else{
      //   swal({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Email or/and password wrong!",
      //     footer: '<a href="">Why do I have this issue?</a>',
      //   });
      // }
    }).catch(error => {
      console.error(error.response.data.message)
      setState(error.response.data.message)
    })
  }
  console.log(state)
  const [error, setError] = useState({
    username: '',
    password: '',
    passwordConfirm: ''
  })

  function handleChange(event) {

    const { value, name } = event.target
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
          if (!value) {
            stateObj[name] = "Please Input Email.";
          }
          break
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.passwordConfirm && value !== input.passwordConfirm) {
            stateObj["passwordConfirm"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["passwordConfirm"] = input.passwordConfirm ? "" : error.passwordConfirm;
          }
          break;

        case "passwordConfirm":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          }
          break;
        default:
          break;
      }

      return stateObj;
    });
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f1f2f2]">
      <form
        className="flex items-center justify-center flex-col bg-[#ffff] rounded-2xl p-[2rem]  "
        onSubmit={handleSubmit}
      >
        <img src={logo} alt="Sewa Asri logo" className="w-32 mb-7" />
        <label className="text-left w-full">Email</label>
        <input
          type="email"
          name="email"
          id=""
          className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-2"
          required
          onChange={(e) => {
            if (e.target.value.includes("@") && e.target.value.includes(".")) {
              setInPassword(true)
            } else {
              setInPassword(true)
            }
            handleChange(e)
          }}
          value={input.email}
          placeholder="you@gmail.com"
        />
        {state  && <div className="text-[0.8rem] w-full text-left text-[#ee4d2d] ">{state}</div>}

        {inPassword &&
          <div className="flex flex-col justify-center items-center">
            <label className="text-left w-full"> Password</label>
            <input
              type="password"
              className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-3"
              placeholder="*******"
              required
              onChange={handleChange}
              value={input.password}
              name="password"
              onBlur={validateInput}
            />
            {error.password && <span className='text-red-600 text-left text-sm w-full'>{error.password}</span>}

            <label className="text-left w-full">Confirm Password</label>
            <input
              type="password"
              className="bg-[#FBFBFB] w-[15rem] rounded-md pl-2 p-1.5 mb-2"
              placeholder="*******"
              required
              value={input.passwordConfirm}
              onBlur={validateInput} // something happen if user leave an input field
              onChange={handleChange}
              name="passwordConfirm"
            />
            {error.passwordConfirm && <span className='text-red-600 text-left text-sm w-full'>{error.passwordConfirm}</span>}

          </div>
        }
        <p className="text-[0.78rem] w-full text-right mb-1 ">Already have an account? <a href="/login" className="text-[#40BF40]"><b>Click</b></a></p>
        <button
          className="text-white bg-[#40BF40] p-2 w-[15rem] rounded-2xl"
          type="submit"
          id="register"
        >
          {inPassword ? "Sign up" : "Input Email"}
        </button>

        <span className="mt-1 mb-1">Or</span>
        <button
          className="border border-[#cccccc] p-2 w-[15rem] rounded-2xl flex gap-2 justify-center items-center"
          type="button"
          id="signGoogle"
        >
          <img src={google} alt="google-logo" className="w-6" />

        </button>

      </form>
    </div>
  );
}

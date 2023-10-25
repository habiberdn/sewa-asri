import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/regisEmail";
import Home from "./homePage/home";
import ForgotPassword from "./auth/forgotPassword";
import NewPasswrod from "./auth/newPassword";
import ResetPassword from "./auth/resetPassword";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/forgotPassword/token" element={<NewPasswrod />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

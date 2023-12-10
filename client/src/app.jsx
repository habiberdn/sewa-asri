import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/auth/login.jsx";
import Register from "./component/auth/regisEmail.jsx";
import Home from "./component/homePage/home.jsx";
import ForgotPassword from "./component/auth/forgotPassword.jsx";
import NewPasswrod from "./component/auth/token.jsx";
import ResetPassword from "./component/auth/resetPassword.jsx";

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

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./auth/login";
import Register from "./auth/register";
import Default from "./auth/default";
import Home from "./homePage/home";


export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Default />} />
      <Route path="/" element={<Home />} />

      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
  
  );
}

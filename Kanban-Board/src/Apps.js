import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.js";
import App from "./App.js";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";

const Apps = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
      </Routes>
    </>
  );
};

export default Apps;

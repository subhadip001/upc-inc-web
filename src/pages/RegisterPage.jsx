import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import Register from "../components/Register-main/Register";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ setUser }) => {
  const nav = useNavigate();
  return (
    <>
      <Navbar nav={nav} isLoggedIn={false} />
      <Register nav={nav} setUser={setUser} />
      <Footer />
    </>
  );
};

export default RegisterPage;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import Update from "../components/Update/Update";
import { useNavigate } from "react-router-dom";

const UpdatePage = ({ setUser, setIsLoggedIn }) => {
  const nav = useNavigate();
  return (
    <>
      <Navbar
        nav={nav}
        isLoggedIn={true}
        setUser={setUser}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Update setUser={setUser} nav={nav} />
      <Footer />
    </>
  );
};

export default UpdatePage;

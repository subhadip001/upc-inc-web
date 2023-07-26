import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import Update from "../components/Update/Update";
import { useNavigate } from "react-router-dom";
import EditUser from "../components/Edit/EditUser";
import AdminDash from "../components/AdminDash/AdminDash";
import UserDetailsAdmin from "../components/UserDetailsAdmin/UserDetailsAdmin";

const UpdatePage = ({ setUser, setIsLoggedIn, user }) => {
  const nav = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  return (
    <>
      <Navbar
        nav={nav}
        isLoggedIn={true}
        setUser={setUser}
        setIsLoggedIn={setIsLoggedIn}
      />
      {user.upc_id !== "admin" && (
        <EditUser setUser={setUser} setIsLoggedIn={setIsLoggedIn} user={user} nav={nav} />
      )}
      {user.upc_id !== "admin" && <Update setUser={setUser} nav={nav} />}
      {user.upc_id === "admin" && userDetails === null && (
        <AdminDash setUserDetails={setUserDetails} />
      )}
      {user.upc_id === "admin" && userDetails !== null && (
        <UserDetailsAdmin
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      )}
      <Footer />
    </>
  );
};

export default UpdatePage;

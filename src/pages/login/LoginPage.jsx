import React from "react";
import "./login.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = ({ setIsLoggedIn, setUser }) => {
  const nav = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    const upc = document.getElementById("login-upc");
    const password = document.getElementById("login-pass");

    let userRes = null;
    await axios
      .get("http://localhost:9000/upc/api/v1", {
        params: { upc_id: upc.value },
      })
      .then((res) => {
        console.log(res.data);
        userRes = res.data;
      });
    if (userRes.password === password.value) {
      setIsLoggedIn(true);
      setUser(userRes);
      console.log(userRes);
      alert("SUCCESSFULLY LOGGED IN !!!");
      nav("/");
    } else {
      alert("WRONG upc id or password!!!");
    }
  };
  return (
    <div className="loginPage">
      <Navbar nav={nav} isLoggedIn={false} />
      <div className="login-sec">
        <h1>Log in your profile </h1>
        <h4>Stay updated with latest exams and job opportunities</h4>
        <form className="login-form" onSubmit={handleLogin}>
          <label>UPC Code</label>
          <input name="upc-c" type="text" id="login-upc" required />
          <label>Password</label>
          <input name="pass" type="password" id="login-pass" required />
          <a href="#">Forgot Password ?</a>
          <br />
          <button type="submit">Login</button>
          <p>
            First time User?{" "}
            <a onClick={() => nav("/register")}>Register now</a>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;

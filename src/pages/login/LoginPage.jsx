import React from "react";
import "./login.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const LoginPage = ({ setIsLoggedIn, setUser }) => {
  const nav = useNavigate();
  const [cookies, setCookies, removeCookies] = useCookies();
  const handleLogin = async (e) => {
    e.preventDefault();

    const upc = document.getElementById("login-upc");
    const password = document.getElementById("login-pass");

    let userRes = null;
    let resp = null;
    await axios
      .get("https://t2bflnyx5i.execute-api.ap-south-1.amazonaws.com/prod/upc/api/v1/fetch", {
        params: { upc_id: upc.value, password: password.value },
      })
      .then((res) => {
        resp = res.status;
        // console.log(res.data);
        userRes = res.data;
      });
    if (resp == 201) {
      setIsLoggedIn(true);
      setUser(userRes.user);
      setCookies("jwt", userRes.token);
      console.log(userRes);
      localStorage.setItem('user',JSON.stringify(userRes.user))
      nav("/profile");
    } else {
      console.log(resp);
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
          <a
            onClick={() => {
              nav("/reset");
            }}
          >
            Forgot Password ?
          </a>
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

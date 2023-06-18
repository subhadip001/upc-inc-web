import React from "react";
import "./login.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <Navbar />
      <div className="login-sec">
        <h1>Log in your profile </h1>
        <h4>Stay updated with latest exams and job opportunities</h4>
        <form className="login-form">
          <label>UPC Code</label>
          <input name="upc-c" type="text" required />
          <label>Password</label>
          <input name="pass" type="password" required />
          <a href="#">Forgot Password ?</a>
          <br />
          <button type="submit">Login</button>
          <p>
            First time User? <a href="#">Register now</a>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;

import React from "react";
import "./Reset.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Reset = () => {
  let verifyCode = null;
  const [acVerified, setAcVerified] = useState(false);
  const nav = useNavigate();
  const findAccountAndEmail = async () => {
    let upc = document.getElementById("reset-upc").value;
    if (upc === "") {
      alert("Please Enter the UPC code first!");
      return;
    } else {
      verifyCode = Math.floor(100000 + Math.random() * 900000);
      await axios
        .get("https://t2bflnyx5i.execute-api.ap-south-1.amazonaws.com/prod/upc/api/v1/resetEmail", {
          params: { upc_id: upc, code: verifyCode },
        })
        .then((res) => {
          alert("Code sent to the registered email !");
        });
    }
  };
  const verifyAccount = () => {
    if (verifyCode == document.getElementById("reset-code").value) {
      setAcVerified(true);
      document.getElementById("verifyCode").innerHTML = "Verified";
      document.getElementById("verifyCode").style.backgroundColor = "green";
      document.getElementById("sendEmail").disabled = true;
    } else {
      alert("Please enter correct code!");
    }
  };
  const saveNewPassword = async () => {
    let upc = document.getElementById("reset-upc").value;
    let newPass = document.getElementById("reset-pass").value;
    if (!acVerified) {
      alert("Please verify your account!");
    } else if (newPass === "") {
      alert("Passwor cannot be empty!");
    } else {
      try {
        await axios
          .patch("https://t2bflnyx5i.execute-api.ap-south-1.amazonaws.com/prod/upc/api/v1/resetPass", {
            upc_id: upc,
            newPass: newPass,
          })
          .then((res) => {
            console.log(res);
            alert("Your password has been updated!");

            nav("/login");
          });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="reset-page">
      <Navbar nav={nav} isLoggedIn={false} />
      <div className="reset-sec">
        <h1>Reset Your Password</h1>
        <h4>Stay updated with latest exams and job opportunities</h4>
        <div className="reset-form">
          <div className="input-box-cont">
            <div className="input-box">
              <label>UPC CODE :</label>
              <input type="text" name="reset-upc" id="reset-upc" required />
            </div>
            <button id="sendEmail" onClick={findAccountAndEmail}>
              Send Password Reset Code
            </button>
          </div>
          <div className="input-box-cont">
            <div className="input-box">
              <label>Enter Code :</label>
              <input type="number" name="reset-code" id="reset-code" required />
            </div>
            <button id="verifyCode" onClick={verifyAccount}>
              Verify Account
            </button>
          </div>
          <div className="input-box">
            <label>New Password :</label>
            <input type="password" name="reset-pass" id="reset-pass" required />
          </div>
        </div>
        <button onClick={saveNewPassword} id="reset-btn">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default Reset;

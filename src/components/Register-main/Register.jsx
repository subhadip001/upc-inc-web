import React from "react";
import "./Register.css";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import Address from "../Address/Address";
import Education from "../Education/Education";
import DocUpload from "../DocUpload/DocUpload";

const Register = () => {
  return (
    <div className="register-main">
      <h1>Register your profile </h1>
      <h4>Stay updated with latest exams and job opportunities</h4>
      <PersonalDetails />
      <Address />
      <Education />
      <DocUpload />
      <div className="btn-cont">
        <button>Submit</button>
        <button id="prev-btn">Preview Profile</button>
      </div>
    </div>
  );
};

export default Register;

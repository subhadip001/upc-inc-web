import React from "react";
import "./PersonalDetails.css";

const PersonalDetails = () => {
  return (
    <div className="personaldetail-sec">
      <h2>Personal Details</h2>
      <div className="input-box">
        <label>Candidate’s Name :</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Avoid using Mr , Mrs and other tiles "
        />
      </div>
      <div className="input-box">
        <label>Email Address :</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Contact Number :</label>
          <input type="number" name="contact" id="contact" />
        </div>
        <div className="input-box">
          <label>Alternative Contact Number :</label>
          <input type="number" name="alt-contact" id="alt-contact" />
        </div>
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Gender :</label>
          <select id="gender">
            <option value="null">--Select Gender--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-box">
          <label>Date Of Birth :</label>
          <input type="date" name="dob" id="dob" placeholder="--MM/DD/YYYY--" />
        </div>
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Father’s Name :</label>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="Avoid using any tiles "
          />
        </div>
        <div className="input-box">
          <label>Mother’s Name :</label>
          <input
            type="text"
            name="mname"
            id="mname"
            placeholder="Avoid using any tiles "
          />
        </div>
      </div>
      <div className="input-box">
        <label>Father’s Email Address :</label>
        <input type="email" name="femail" id="femail" />
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Category :</label>
          <select id="category">
            <option value="null">--Select Category--</option>
            <option value="gen">General</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
            <option value="obc">OBC</option>
            <option value="ewc">EWC</option>
            <option value="min">Other minorities</option>
          </select>
        </div>
        <div className="input-box">
          <label>Nationality :</label>
          <input type="text" name="nation" id="nation" />
        </div>
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>PwD :</label>
          <select id="pwd">
            <option value="null">--Select Yes/No--</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="input-box">
          <label>Marital Status :</label>
          <select id="marital">
            <option value="unmarried">Unmarried</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>ID Type :</label>
          <select id="id-type">
            <option value="pan">Pan Card</option>
            <option value="aadhar">Aadhar Card</option>
            <option value="passport">Passport</option>
            <option value="voterid">Voter ID</option>
          </select>
        </div>
        <div className="input-box">
          <label>ID Number :</label>
          <input
            type="text"
            name="id-num"
            id="id-num"
            placeholder="Avoid using Mr , Mrs and other tiles "
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;

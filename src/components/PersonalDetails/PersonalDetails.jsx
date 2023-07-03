import React from "react";
import "./PersonalDetails.css";

const PersonalDetails = ({ sendVerificationCode, verify }) => {
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
          required
        />
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Email Address :</label>
          <input type="email" name="email" id="email" required />
        </div>
        <button onClick={sendVerificationCode}>Send Verification Code</button>
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Verification Code :</label>
          <input type="number" name="v-code" id="v-code" required />
        </div>
        <button onClick={verify}>Verify Email</button>
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Contact Number :</label>
          <input type="number" name="contact" id="contact" required />
        </div>
        <div className="input-box">
          <label>Alternative Contact Number :</label>
          <input type="number" name="alt-contact" id="alt-contact" required />
        </div>
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Gender :</label>
          <select id="gender" required>
            <option value="null">--Select Gender--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-box">
          <label>Date Of Birth :</label>
          <input
            type="date"
            name="dob"
            id="dob"
            placeholder="--MM/DD/YYYY--"
            required
          />
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
            required
          />
        </div>
        <div className="input-box">
          <label>Mother’s Name :</label>
          <input
            type="text"
            name="mname"
            id="mname"
            placeholder="Avoid using any tiles "
            required
          />
        </div>
      </div>
      <div className="input-box">
        <label>Father’s Email Address :</label>
        <input type="email" name="femail" id="femail" required />
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Category :</label>
          <select id="category" required>
            <option value="null">--Select Category--</option>
            <option value="gen">General</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
            <option value="obc">OBC</option>
            <option value="ewc">EWC</option>
            <option value="other-min">Other minorities</option>
          </select>
        </div>
        <div className="input-box">
          <label>Nationality :</label>
          <input type="text" name="nation" id="nation" required />
        </div>
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>PwD :</label>
          <select id="pwd" required>
            <option value="null">--Select Yes/No--</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="input-box">
          <label>Marital Status :</label>
          <select id="marital" required>
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
          <select id="id-type" required>
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
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;

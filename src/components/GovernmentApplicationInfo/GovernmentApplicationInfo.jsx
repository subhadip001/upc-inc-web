import React from "react";
import "./GovernmentApplicationInfo.css";

const GovernmentApplicationInfo = () => {
  return (
    <div className="application-sec">
      <div className="add-info">
        <h2>Additional Information</h2>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Place of Residence :</label>
            <select id="urban-rural">
              <option value="null">--Select Urban/Rural--</option>
              <option value="male">Urban</option>
              <option value="female">Rural</option>
            </select>
          </div>
          <div className="input-box">
            <label>Are You Diabetic? :</label>
            <select id="diabetic">
              <option value="null">--Select Yes/No--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Are You A Twin? :</label>
            <select id="twin">
              <option value="null">--Select Yes/No--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </div>
      <div className="applied-for">
        <h2>Applied For</h2>
        <div className="input-box">
          <label>Apply For :</label>
          <input type="text" name="apply-for" id="apply-for" />
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Session(s) Applied For :</label>
            <input
              type="text"
              id="sessions"
              placeholder="--select sessions--"
            />
          </div>
          <div className="input-box">
            <label>Exam Medium :</label>
            <input type="text" id="medium" placeholder="--Select Medium--" />
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Exam Location 1st choice :</label>
            <input
              type="text"
              id="location-1"
              placeholder="--Select Location--"
            />
          </div>
          <div className="input-box">
            <label>Exam Location 2nd choice :</label>
            <input
              type="text"
              id="location-2"
              placeholder="--Select Location--"
            />
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Exam Location 3rd choice :</label>
            <input
              type="text"
              id="location-3"
              placeholder="--Select Location--"
            />
          </div>
        </div>
      </div>
      <div className="emp-status">
        <h2>Present Employment Status</h2>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Sector :</label>
            <select id="sector">
              <option value="null">--Select Sector--</option>
              <option value="gov">Government</option>
              <option value="pvt">Private</option>
              <option value="self">Self Employed</option>
              <option value="unemp">Unemployed</option>
            </select>
          </div>
          <div className="input-box">
            <label>Agency/Office :</label>
            <input type="text" name="agency-office" id="agency-office" />
          </div>
        </div>
        <div className="input-box">
          <label>Address :</label>
          <input type="text" name="off-address" id="off-address" />
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Position/Job Title :</label>
            <input type="text" name="position" id="position" />
          </div>
          <div className="input-box">
            <div className="input-box">
              <label>No of years in Present Job :</label>
              <input type="number" name="job-years" id="job-years" />
            </div>
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Status Employment :</label>
            <input type="text" name="status-emp" id="status-emp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentApplicationInfo;

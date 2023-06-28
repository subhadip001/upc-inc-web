import React from "react";
import "./ApplyForSector.css";

const ApplyForSector = ({ setSector }) => {
  const handleSectorChange = (e) => {
    setSector(e.target.value);
  };
  return (
    <div className="apply-for">
      <h2>Applying For :</h2>
      <div className="radio-cont">
        <div className="radio-choice">
          <input
            type="radio"
            name="sector"
            className="sector"
            value="gov"
            onChange={handleSectorChange}
          />
          <label>Government Sector</label>
        </div>
        <div className="radio-choice">
          <input
            type="radio"
            name="sector"
            className="sector"
            value="pvt"
            onChange={handleSectorChange}
          />
          <label>Private Sector</label>
        </div>
        <div className="radio-choice">
          <input
            type="radio"
            name="sector"
            className="sector"
            value="both"
            onChange={handleSectorChange}
          />
          <label>Both Government And Private Sector</label>
        </div>
      </div>
    </div>
  );
};

export default ApplyForSector;

import React from "react";

const Project = () => {
  return (
    <>
      <div className="input-box">
        <label>Organization :</label>
        <input type="text" name="pjt-org" className="pjt-org" />
      </div>
      <div className="input-box">
        <label>Industry/Institution :</label>
        <input type="text" name="pjt-indus" className="pjt-indus" />
      </div>
      <div className="input-box">
        <label>Description :</label>
        <input type="text" name="pjt-desc" className="pjt-desc" />
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Start Date :</label>
          <input
            type="date"
            className="pjt-start"
            placeholder="--Start Date--"
          />
        </div>
        <div className="input-box">
          <label>End Date :</label>
          <input type="date" className="pjt-end" placeholder="--End Date--" />
        </div>
      </div>
    </>
  );
};

export default Project;

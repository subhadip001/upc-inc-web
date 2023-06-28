import React from "react";

const WorkExp = () => {
  return (
    <>
      <div className="input-box">
        <label>Organization :</label>
        <input type="text" name="work-org" className="work-org" />
      </div>
      <div className="input-box">
        <label>Position :</label>
        <input type="text" name="work-pos" className="work-pos" />
      </div>
      <div className="input-box">
        <label>Description :</label>
        <input type="text" name="work-desc" className="work-desc" />
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Start Date :</label>
          <input
            type="date"
            className="work-start"
            placeholder="--Start Date--"
          />
        </div>
        <div className="input-box">
          <label>End Date :</label>
          <input type="date" className="work-end" placeholder="--End Date--" />
        </div>
      </div>
    </>
  );
};

export default WorkExp;

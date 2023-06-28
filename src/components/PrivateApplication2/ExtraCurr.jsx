import React from "react";

const ExtraCurr = () => {
  return (
    <>
      <div className="input-box">
        <label>Activity :</label>
        <input type="text" name="cur-name" className="cur-name" />
      </div>
      <div className="input-box">
        <label>Position :</label>
        <input type="text" name="cur-pos" className="cur-pos" />
      </div>
      <div className="input-box">
        <label>Description :</label>
        <input type="text" name="cur-desc" className="cur-desc" />
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Start Date :</label>
          <input
            type="date"
            className="cur-start"
            placeholder="--Start Date--"
          />
        </div>
        <div className="input-box">
          <label>End Date :</label>
          <input type="date" className="cur-end" placeholder="--End Date--" />
        </div>
      </div>
    </>
  );
};

export default ExtraCurr;

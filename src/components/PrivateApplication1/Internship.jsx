import React from "react";

const Internship = () => {
  return (
    <>
      <div className="input-box">
        <label>Company :</label>
        <input type="text" name="intern-comp" className="intern-comp" />
      </div>
      <div className="input-box">
        <label>Title :</label>
        <input type="text" name="intern-title" className="intern-title" />
      </div>
      <div className="input-box">
        <label>Description :</label>
        <input type="text" name="intern-desc" className="intern-desc" />
      </div>
      <div className="input-box-cont">
        <div className="input-box">
          <label>Start Date :</label>
          <input
            type="date"
            className="int-start"
            placeholder="--Start Date--"
          />
        </div>
        <div className="input-box">
          <label>End Date :</label>
          <input type="date" className="int-end" placeholder="--End Date--" />
        </div>
      </div>
    </>
  );
};

export default Internship;

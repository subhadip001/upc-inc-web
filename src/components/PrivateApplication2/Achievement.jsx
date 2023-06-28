import React from "react";

const Achievement = ({ id }) => {
  return (
    <div className="input-box-cont">
      <div className="input-box">
        <label>Achievement :</label>
        <input type="text" className="achievement" />
      </div>
      <input type="file" id={id} className="achieve-proof" hidden />
      <div className="input-box">
        <label>Verify :</label>
        <button
          className="doc-btn"
          onClick={() => document.getElementById(id).click()}
        >
          --upload document--
        </button>
      </div>
    </div>
  );
};

export default Achievement;

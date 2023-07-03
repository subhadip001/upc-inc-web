import React from "react";

const Achievement = ({ id, setX, totalFiles }) => {
  return (
    <div className="input-box-cont2">
      <div className="input-box">
        <label>Achievement :</label>
        <input type="text" className="achievement" />
      </div>
      <input type="file" id={id} className="achieve-proof" hidden />
      <div className="input-box">
        <label>Verify :</label>
        <button
          className="doc-btn"
          onClick={() => {
            document.getElementById(id).click();
            totalFiles.current += 1;
            setX(Math.random());
          }}
        >
          --upload document--
        </button>
      </div>
    </div>
  );
};

export default Achievement;

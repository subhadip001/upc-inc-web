import React from "react";
import "./PrivateApplication3.css";

const PrivateApplication3 = () => {
  return (
    <div className="pv3-sec">
      <div className="publication-sec">
        <h2>Publication</h2>
        <div className="input-box">
          <label>Title :</label>
          <input type="text" id="pub-title" />
        </div>
        <div className="input-box">
          <label>Authors :</label>
          <input type="text" id="pub-author" />
        </div>
        <div className="input-box">
          <label>Publisher :</label>
          <input type="text" id="pub-publisher" />
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Year :</label>
            <input type="number" id="pub-year" />
          </div>
          <div className="input-box">
            <label>Pages :</label>
            <input type="number" id="pub-pages" />
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Volume :</label>
            <input type="text" id="pub-volume" />
          </div>
          <div className="input-box">
            <label>Journal :</label>
            <input type="text" id="pub-journal" />
          </div>
        </div>
      </div>
      <div className="reference-sec">
        <h2>Reference</h2>
        <div className="input-box">
          <label>Referee :</label>
          <input type="text" id="ref-referee" />
        </div>
        <div className="input-box">
          <label>Designation :</label>
          <input type="text" id="ref-designation" />
        </div>
        <div className="input-box">
          <label>Institute :</label>
          <input type="text" id="ref-inst" />
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Phone :</label>
            <input type="number" id="ref-ph" />
          </div>
          <div className="input-box">
            <label>Email :</label>
            <input type="email" id="ref-email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateApplication3;

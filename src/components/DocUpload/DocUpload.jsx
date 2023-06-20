import React from "react";
import "./DocUpload.css";

const DocUpload = () => {
  return (
    <div className="doc-sec">
      <h2>Documents Uploaded</h2>
      <div className="doc-grid-cont">
        <div
          className="upload-file-card"
          onClick={() => document.querySelector("#profile-pic-file").click()}
        >
          <input type="file" id="profile-pic-file" hidden />
          <h4>Upload your Picture</h4>
          <p>Less than 200kb</p>
        </div>
        <div
          className="upload-file-card"
          onClick={() => document.querySelector("#sign-file").click()}
        >
          <input type="file" id="sign-file" hidden />
          <h4>Upload your Signature</h4>
          <p>Less than 50kb</p>
        </div>
        <div
          className="upload-file-card"
          onClick={() => document.querySelector("#10mk-file").click()}
        >
          <input type="file" id="10mk-file" hidden />
          <h4>Upload 10th Marksheet</h4>
          <p>Less than 50kb</p>
        </div>
        <div
          className="upload-file-card"
          onClick={() => document.querySelector("#12mk-file").click()}
        >
          <input type="file" id="12mk-file" hidden />
          <h4>Upload 12th Marksheet</h4>
          <p>Less than 50kb</p>
        </div>
        <div
          className="upload-file-card"
          onClick={() => document.querySelector("#aadhar-file").click()}
        >
          <input type="file" id="aadhar-file" hidden />
          <h4>Upload Aadhar Card</h4>
          <p>Less than 200kb</p>
        </div>
        <div
          className="upload-file-card"
          onClick={() => document.querySelector("#pan-file").click()}
        >
          <input type="file" id="pan-file" hidden />
          <h4>Upload Pan Card</h4>
          <p>Less than 50kb</p>
        </div>
        <div
          className="upload-file-card"
          onClick={() => document.querySelector("#cast-file").click()}
        >
          <input type="file" id="cast-file" hidden />
          <h4>Upload Cast Certificate</h4>
          <p>Less than 50kb</p>
        </div>
      </div>
    </div>
  );
};

export default DocUpload;

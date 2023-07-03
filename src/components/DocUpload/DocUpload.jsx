import React from "react";
import "./DocUpload.css";

const DocUpload = ({ setTotalFiles, totalFiles }) => {
  return (
    <div className="doc-sec">
      <h2>Documents Uploaded</h2>
      <div className="doc-grid-cont">
        <div
          className="upload-file-card"
          onClick={() => {
            document.querySelector("#profile-pic-file").click();
            setTotalFiles(totalFiles + 1);
          }}
        >
          <input type="file" id="profile-pic-file" hidden />
          <img src="profile.png" alt="user profile" />
          <h4>Upload your Picture</h4>
          <p>Less than 200kb</p>
        </div>
        <div
          className="upload-file-card"
          onClick={() => {
            document.querySelector("#sign-file").click();
            setTotalFiles(totalFiles + 1);
          }}
        >
          <input type="file" id="sign-file" hidden />
          <img src="doc1.png" alt="document1" />
          <h4>Upload your Signature</h4>
          <p>Less than 50kb</p>
        </div>
        <div
          className="upload-file-card"
          onClick={() => {
            document.querySelector("#mk10-file").click();
            setTotalFiles(totalFiles + 1);
          }}
        >
          <input type="file" id="mk10-file" hidden />
          <img src="doc1.png" alt="document1" />
          <h4>Upload 10th Marksheet</h4>
          <p>Less than 50kb</p>
        </div>
        <div
          className="upload-file-card"
          onClick={() => {
            document.querySelector("#mk12-file").click();
            setTotalFiles(totalFiles + 1);
          }}
        >
          <input type="file" id="mk12-file" hidden />
          <img src="doc1.png" alt="document1" />
          <h4>Upload 12th Marksheet</h4>
          <p>Less than 50kb</p>
        </div>
        <div
          className="upload-file-card"
          onClick={() => {
            document.querySelector("#aadhar-file").click();
            setTotalFiles(totalFiles + 1);
          }}
        >
          <input type="file" id="aadhar-file" hidden />
          <img src="doc2.png" alt="document2" />
          <h4>Upload Aadhar Card</h4>
          <p>Less than 200kb</p>
        </div>
        <div
          className="upload-file-card"
          onClick={() => {
            document.querySelector("#pan-file").click();
            setTotalFiles(totalFiles + 1);
          }}
        >
          <input type="file" id="pan-file" hidden />
          <img src="doc2.png" alt="document2" />
          <h4>Upload Pan Card</h4>
          <p>Less than 50kb</p>
        </div>
        <div
          className="upload-file-card"
          onClick={() => {
            document.querySelector("#cast-file").click();
            setTotalFiles(totalFiles + 1);
          }}
        >
          <input type="file" id="cast-file" hidden />
          <img src="doc2.png" alt="document2" />
          <h4>Upload Cast Certificate</h4>
          <p>Less than 50kb</p>
        </div>
      </div>
    </div>
  );
};

export default DocUpload;

import React from "react";
import "./DocUpload.css";

const DocUpload = ({ setTotalFiles, totalFiles }) => {
  return (
    <div className="doc-sec">
        <h2>Documents Uploaded</h2>
        <div className="doc-grid-cont">
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#profile-pic-file").click();
              setTotalFiles(totalFiles + 1);
              
            }}
          >
            <input type="file" id="profile-pic-file" onChange={()=>document.querySelectorAll('.file-name')[0].innerHTML=document.querySelector("#profile-pic-file").files[0].name} hidden />
            <img src="profile.png" alt="userNew profile" />
            <h4>Upload your Picture</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 200kb</p>
          </div>
          
          </div>
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#sign-file").click();
              setTotalFiles(totalFiles + 1);
              
            }}
          >
            <input type="file" id="sign-file" onChange={()=>document.querySelectorAll('.file-name')[1].innerHTML=document.querySelector("#sign-file").files[0].name} hidden />
            <img src="doc1.png" alt="document1" />
            <h4>Upload your Signature</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 50kb</p>
          </div>
          
          </div>
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#mk10-file").click();
              setTotalFiles(totalFiles + 1);
              
            }}
          >
            <input type="file" id="mk10-file" onChange={()=>document.querySelectorAll('.file-name')[2].innerHTML=document.querySelector("#mk10-file").files[0].name} hidden />
            <img src="doc1.png" alt="document1" />
            <h4>Upload 10th Marksheet</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 50kb</p>
            
          </div>
          
          </div>
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#mk12-file").click();
              setTotalFiles(totalFiles + 1);
              
            }}
          >
            <input type="file" id="mk12-file" onChange={()=>document.querySelectorAll('.file-name')[3].innerHTML=document.querySelector("#mk12-file").files[0].name} hidden />
            <img src="doc1.png" alt="document1" />
            <h4>Upload 12th Marksheet</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 50kb</p>
          </div>
         
          </div>
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#aadhar-file").click();
              setTotalFiles(totalFiles + 1);
              
            }}
          >
            <input type="file" id="aadhar-file" onChange={()=>document.querySelectorAll('.file-name')[4].innerHTML=document.querySelector("#aadhar-file").files[0].name} hidden />
            <img src="doc2.png" alt="document2" />
            <h4>Upload Aadhar Card</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 200kb</p>
          </div>
          
          
          </div>
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#pan-file").click();
              setTotalFiles(totalFiles + 1);
            }}
          >
            <input type="file" id="pan-file" onChange={()=>document.querySelectorAll('.file-name')[5].innerHTML=document.querySelector("#pan-file").files[0].name} hidden />
            <img src="doc2.png" alt="document2" />
            <h4>Upload Pan Card</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 50kb</p>
          </div>
          
          </div>
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#cast-file").click();
              setTotalFiles(totalFiles + 1);
              
            }}
          >
            <input type="file" id="cast-file" onChange={()=>document.querySelectorAll('.file-name')[6].innerHTML=document.querySelector("#cast-file").files[0].name} hidden />
            <img src="doc2.png" alt="document2" />
            <h4>Upload Cast Certificate</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 50kb</p>
          </div>
          
          </div>
        </div>
      </div>
  );
};

export default DocUpload;

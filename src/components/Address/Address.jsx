import React, { useEffect, useState } from "react";
import "./Address.css";

const Address = () => {
  return (
    <div className="address-sec">
      <div className="pres-address-sec">
        <h2>Present Address</h2>
        <div className="input-box">
          <label>Address :</label>
          <input type="text" name="pres-address" id="pres-address" />
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Country :</label>
            <input type="text" name="pres-country" id="pres-country" />
          </div>
          <div className="input-box">
            <label>State :</label>
            <input type="text" name="pres-country" id="pres-country" />
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>City/Town/Village :</label>
            <input type="text" name="pres-city" id="pres-city" />
          </div>
          <div className="input-box">
            <label>District:</label>
            <input type="text" name="pres-district" id="pres-district" />
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Pincode :</label>
            <input type="text" name="pres-pincode" id="pres-pincode" />
          </div>
        </div>
      </div>
      <div className="perm-address-sec">
        <h2>Permanent Address</h2>
        <div className="radio-cont">
          <input type="radio" id="radio" /> <p>Same As Present Address</p>
        </div>

        <div className="input-box">
          <label>Address :</label>
          <input type="text" name="perm-address" id="perm-address" />
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Country :</label>
            <input type="text" name="perm-country" id="perm-country" />
          </div>
          <div className="input-box">
            <label>State :</label>
            <input type="text" name="perm-country" id="perm-country" />
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>City/Town/Village :</label>
            <input type="text" name="perm-city" id="perm-city" />
          </div>
          <div className="input-box">
            <label>District:</label>
            <input type="text" name="perm-district" id="perm-district" />
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Pincode :</label>
            <input type="text" name="perm-pincode" id="perm-pincode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;

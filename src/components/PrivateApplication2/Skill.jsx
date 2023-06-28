import React from "react";

const Skill = ({ sr }) => {
  return (
    <div className="input-box">
      <label>Skill {sr} :</label>
      <input type="text" className="skill" placeholder="--Add Skills--" />
    </div>
  );
};

export default Skill;

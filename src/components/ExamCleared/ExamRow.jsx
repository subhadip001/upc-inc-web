import React from "react";

const ExamRow = ({ id }) => {
  return (
    <div className="exam-detail-row">
      <input className="exam-name" type="text" placeholder="--ABC--" />
      <select className="exam-level">
        <option value="prelims">--Prelimes--</option>
        <option value="main">--Mains--</option>
        <option value="advance">--Advanced--</option>
      </select>
      <input type="file" id={id} className="exam-proof" hidden />
      <button onClick={() => document.getElementById(id).click()}>
        --upload document--
      </button>
    </div>
  );
};

export default ExamRow;

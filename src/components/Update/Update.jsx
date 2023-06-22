import React from "react";
import "./Update.css";
import ExamCleared from "../ExamCleared/ExamCleared";

const Update = () => {
  return (
    <div className="update-main">
      <h1>Update your profile </h1>
      <h4>Stay updated with latest exams and job opportunities</h4>
      <ExamCleared />
    </div>
  );
};

export default Update;

import React, { useRef, useState } from "react";
import "./ExamCleared.css";
import ExamRow from "./ExamRow";

const ExamCleared = () => {
  const [exams, setExams] = useState([
    <ExamRow id="exam-proof1" />,
    <ExamRow id="exam-proof2" />,
    <ExamRow id="exam-proof3" />,
  ]);

  let examsNO = useRef(3);
  const addExam = () => {
    examsNO.current += 1;
    let id = "exam-proof" + examsNO.current;

    setExams(exams.concat(<ExamRow id={id} />));
  };
  return (
    <div className="examcleared-sec">
      <div className="exam-head">
        <h2>Exam Cleared</h2>
        <button onClick={addExam}>Add More</button>
      </div>
      <div className="exam-details" id="exam-details">
        <div className="exam-detail-row">
          <p>Exam Name</p>
          <p>Level</p>
          <p>Proof</p>
        </div>
        {exams}
      </div>
    </div>
  );
};

export default ExamCleared;

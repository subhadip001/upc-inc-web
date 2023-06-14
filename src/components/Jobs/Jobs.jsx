import React from "react";
import "./Jobs.css";

const Jobs = () => {
  const jobs = [
    "IDBI Bank Execute",
    "UPMUS Nursing Officer",
    "Navy Charge man",
    "Bihar BPSC Teacher",
    "Bihar BPSC Teacher",
    "Navy Charge man",
    "IDBI Bank Execute",
    "UPMUS Nursing Officer",
    "Navy Charge man",
    "Bihar BPSC Teacher",
  ];

  return (
    <div className="jobs-sec">
      <h1>Latest Jobs</h1>
      <div className="job-card-cont">
        {jobs.map((job) => {
          return <div className="job-card">{job}</div>;
        })}
      </div>
    </div>
  );
};

export default Jobs;

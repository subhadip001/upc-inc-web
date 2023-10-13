import React from "react";
import "./Jobs.css";

const Jobs = ({links}) => {
  // const jobs = [
  //   "IDBI Bank Execute",
  //   "UPMUS Nursing Officer",
  //   "Navy Charge man",
  //   "Bihar BPSC Teacher",
  //   "Bihar BPSC Teacher",
  //   "Navy Charge man",
  //   "IDBI Bank Execute",
  //   "UPMUS Nursing Officer",
  //   "Navy Charge man",
  //   "Bihar BPSC Teacher",
  // ];
  const jobs=links.filter((job)=>{return job.type=="job"})

  return (
    <div className="jobs-sec">
      <h1>Latest Jobs</h1>
      <div className="job-card-cont">
        {jobs.map((job) => {
          return <a href={job.url} target="blank"><div className="job-card">{job.title}</div></a>;
        })}
      </div>
    </div>
  );
};

export default Jobs;

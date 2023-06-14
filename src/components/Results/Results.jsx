import React from "react";
import "./Results.css";

const Results = () => {
  const results = [
    "LIC ADO Phase II",
    "Bihar SSC Graduate",
    "SSC CPO PI 2023",
    "SSC Junior Engineer",
    "SSC CPO PI 2023",
    "LIC ADO Phase II",
    "SSC Junior Engineer",
    "Bihar SSC Graduate",
    "SSC Junior Engineer",
    "LIC ADO Phase II",
    "SSC CPO PI 2023",
    "Bihar SSC Graduate",
    "SSC CPO PI 2023",
  ];
  return (
    <div className="results-sec">
      <h1>Results</h1>
      <div className="results-card-cont">
        {results.map((result) => {
          return <div className="result-card">{result}</div>;
        })}
      </div>
    </div>
  );
};

export default Results;

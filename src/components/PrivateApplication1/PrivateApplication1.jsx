import React, { useState } from "react";
import "./PrivateApplication1.css";
import Internship from "./Internship";
import WorkExp from "./WorkExp";
import Project from "./Project";

const PrivateApplication1 = () => {
  const [internships, setInternships] = useState([<Internship />]);
  const [works, setWorks] = useState([<WorkExp />]);
  const [projects, setProjects] = useState([<Project />]);
  const addInternship = () => {
    setInternships(internships.concat(<Internship />));
  };
  const addWork = () => {
    setWorks(works.concat(<WorkExp />));
  };
  const addProject = () => {
    setProjects(projects.concat(<Project />));
  };
  return (
    <div className="pv1-sec">
      <div className="area-of-interest">
        <h2>Area Of Interest</h2>
        <div className="input-box">
          <label>Area Of Interest :</label>
          <input
            type="text"
            name="area-interest"
            id="area-interest"
            placeholder="-- Mention Your Area Of Interesteg Finance, Marketing, Teaching etc --"
          />
        </div>
      </div>
      <div className="internship-sec">
        <div className="intern-head">
          <h2>Internship Detail</h2>
          <button onClick={addInternship}>Add More</button>
        </div>
        {internships}
      </div>
      <div className="work-exp-sec">
        <div className="work-head">
          <h2>Work Experience</h2>
          <button onClick={addWork}>Add More</button>
        </div>
        {works}
      </div>
      <div className="project-sec">
        <div className="project-head">
          <h2>Projects</h2>
          <button onClick={addProject}>Add More</button>
        </div>
        {projects}
      </div>
    </div>
  );
};

export default PrivateApplication1;

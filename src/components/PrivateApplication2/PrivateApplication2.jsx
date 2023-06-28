import React, { useRef, useState } from "react";
import "./PrivateApplication2.css";
import Achievement from "./Achievement";
import Skill from "./Skill";
import ExtraCurr from "./ExtraCurr";

const PrivateApplication2 = () => {
  let skillNO = useRef(5);
  let achieveNO = useRef(3);
  const [excurr, setExcurr] = useState([<ExtraCurr />]);
  const [achievements, setAchievements] = useState([
    <Achievement id="achieve1" />,
    <Achievement id="achieve2" />,
    <Achievement id="achieve3" />,
  ]);
  const [skills, setSkills] = useState([
    <Skill sr={1} />,
    <Skill sr={2} />,
    <Skill sr={3} />,
    <Skill sr={4} />,
    <Skill sr={5} />,
  ]);
  const addAchivement = () => {
    achieveNO.current += 1;
    let newId = "achieve" + achieveNO.current;
    setAchievements(achievements.concat(<Achievement id={newId} />));
  };
  const addSkill = () => {
    skillNO.current += 1;
    setSkills(skills.concat(<Skill sr={skillNO.current} />));
  };
  const addCurr = () => {
    setExcurr(excurr.concat(<ExtraCurr />));
  };
  return (
    <div className="pv2-sec">
      <div className="achievement-sec">
        <div className="achieve-head">
          <h2>Achievements</h2>
          <button onClick={addAchivement}>Add More</button>
        </div>
        {achievements}
      </div>
      <div className="skill-sec">
        <div className="skill-head">
          <h2>Skills</h2>
          <button onClick={addSkill}>Add More</button>
        </div>
        <div className="skill-cont">{skills}</div>
      </div>
      <div className="extra-cur-sec">
        <div className="cur-head">
          <h2>Extra Curricular</h2>
          <button onClick={addCurr}>Add More</button>
        </div>
        {excurr}
      </div>
    </div>
  );
};

export default PrivateApplication2;

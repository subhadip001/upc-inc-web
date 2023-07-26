import React, { useContext, useState, useEffect, useRef } from "react";
import "./Update.css";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import ExamCleared from "../ExamCleared/ExamCleared";

import ApplyForSector from "../applyForSector/ApplyForSector";
import GovernmentApplicationInfo from "../GovernmentApplicationInfo/GovernmentApplicationInfo";
import PrivateApplication1 from "../PrivateApplication1/PrivateApplication1";
import PrivateApplication3 from "../PrivateApplication3/PrivateApplication3";
import PrivateApplication2 from "../PrivateApplication2/PrivateApplication2";
import { UserContext } from "../../App";
import axios from "axios";

const Update = ({ setUser, nav }) => {
  const progress = useRef(0);
  const [x, setX] = useState(0);
  const totalFiles = useRef(0);
  const [sector, setSector] = useState("gov");
  const user = useContext(UserContext);

  useEffect(() => {
    document.getElementById("progress-bar").style.display = "none";
    document.getElementById("progress").style.display = "none";
    if (progress.current >= 1) {
      // alert(progress);
      document.getElementById("progress-bar").style.display = "block";
      document.getElementById("progress").style.display = "block";
    }

    document.getElementById("progress").style.width = `${
      (progress.current / totalFiles.current) * 100
    }%`;
  }, [x]);
  console.log(user);
  const handleUpdate = async () => {
    let examsCleared = user.examsCleared || [];
    const examNames = document.getElementsByClassName("exam-name");
    for (let i = 0; i < examNames.length; i++) {
      let proofs = document.getElementsByClassName("exam-proof");
      let proof_url = null;
      if (proofs[i].files[0] != null) {
        const imgRef = ref(storage, `exam-proof/${i + 1}/${user.upc_id}`);
        await uploadBytes(imgRef, proofs[i].files[0]);

        // console.log(await getDownloadURL(imgRef));
        proof_url = new URL(await getDownloadURL(imgRef));
        progress.current += 1;
        setX(Math.random());
      }
      let newExam = {
        name: examNames[i].value,
        level: document.getElementsByClassName("exam-level")[i].value,
        url_proof: proof_url,
      };
      examsCleared.push(newExam);
    }
    const application_sector = sector;
    let additionalInfo = user.additionalInfo;
    let applicationFor = user.applicationFor;
    let presentEmployment = user.presentEmployment;
    let areaOfInterest = "";
    let internships = user.internships || [];
    let workExperiences = user.workExperiences || [];
    let projects = user.projects || [];
    let achievements = user.achievements || [];
    let skills = user.skills || [];
    let ExtraCurriculars = user.ExtraCurriculars || [];
    let publication = user.publication;
    let reference = user.reference;
    if (sector === "both") {
      additionalInfo = {
        placeOfResidence: document.getElementById("urban-rural").value,
        diabetic: document.getElementById("diabetic").value,
        twin: document.getElementById("twin").value,
      };
      applicationFor = {
        application_for: document.getElementById("apply-for").value,
        sessions: document.getElementById("sessions").value,
        exam_medium: document.getElementById("medium").value,
        location_choice1: document.getElementById("location-1").value,
        location_choice2: document.getElementById("location-2").value,
        location_choice3: document.getElementById("location-3").value,
      };
      presentEmployment = {
        sector: document.getElementById("sector").value,
        office: document.getElementById("agency-office").value,
        office_address: document.getElementById("off-address").value,
        job_title: document.getElementById("position").value,
        years_worked: document.getElementById("job-years").value,
        currr_status: document.getElementById("status-emp").value,
      };
      areaOfInterest = document.getElementById("area-interest").value;
      let companyName = document.getElementsByClassName("intern-comp");
      for (let i = 0; i < companyName.length; i += 1) {
        let newInternship = {
          company: companyName[i].value,
          title: document.getElementsByClassName("intern-title")[i].value,
          description: document.getElementsByClassName("intern-desc")[i].value,
          start_date: document.getElementsByClassName("int-start")[i].value,
          end_date: document.getElementsByClassName("int-end")[i].value,
        };
        internships.push(newInternship);
      }
      let workOrg = document.getElementsByClassName("work-org");
      for (let i = 0; i < workOrg.length; i += 1) {
        let newWorkExp = {
          organization: workOrg[i].value,
          position: document.getElementsByClassName("work-pos")[i].value,
          description: document.getElementsByClassName("work-desc")[i].value,
          start_date: document.getElementsByClassName("work-start")[i].value,
          end_date: document.getElementsByClassName("work-end")[i].value,
        };
        workExperiences.push(newWorkExp);
      }
      let pjtOrg = document.getElementsByClassName("pjt-org");
      for (let i = 0; i < pjtOrg.length; i += 1) {
        let newProject = {
          organization: pjtOrg[i].value,
          industry_institution:
            document.getElementsByClassName("pjt-indus")[i].value,
          description: document.getElementsByClassName("pjt-desc")[i].value,
          start_date: document.getElementsByClassName("pjt-start")[i].value,
          end_date: document.getElementsByClassName("pjt-end")[i].value,
        };
        projects.push(newProject);
      }
      let achievementNames = document.getElementsByClassName("achievement");
      for (let i = 0; i < achievementNames.length; i += 1) {
        let achieve_proof = document.getElementsByClassName("achieve-proof");
        let achieve_proof_url = null;
        if (achieve_proof[i].files[0] != null) {
          const imgRef = ref(
            storage,
            `achievement-proof/${i + 1}/${user.upc_id}`
          );
          await uploadBytes(imgRef, achieve_proof[i].files[0]);

          // console.log(await getDownloadURL(imgRef));
          achieve_proof_url = new URL(await getDownloadURL(imgRef));
          progress.current += 1;
          setX(Math.random());
        }
        let newAchievement = {
          achievement: achievementNames[i].value,
          proof: achieve_proof_url,
        };
        achievements.push(newAchievement);
      }
      let skillel = document.getElementsByClassName("skill");
      for (let i = 0; i < skillel.length; i += 1) {
        skills.push(skillel[i].value);
      }
      let activities = document.getElementsByClassName("cur-name");
      for (let i = 0; i < activities.length; i += 1) {
        let newExtraCurr = {
          activity_name: activities[i].value,
          position: document.getElementsByClassName("cur-pos")[i].value,
          description: document.getElementsByClassName("cur-desc")[i].value,
          start_date: document.getElementsByClassName("cur-start")[i].value,
          end_date: document.getElementsByClassName("cur-end")[i].value,
        };
        ExtraCurriculars.push(newExtraCurr);
      }
      publication = {
        title: document.getElementById("pub-title").value,
        author: document.getElementById("pub-author").value,
        publisher: document.getElementById("pub-publisher").value,
        year: document.getElementById("pub-year").value,
        pages: document.getElementById("pub-pages").value,
        volume: document.getElementById("pub-volume").value,
        journal: document.getElementById("pub-journal").value,
      };
      reference = {
        referee: document.getElementById("ref-referee").value,
        designation: document.getElementById("ref-designation").value,
        institute: document.getElementById("ref-inst").value,
        phone: document.getElementById("ref-ph").value,
        email: document.getElementById("ref-email").value,
      };
    } else if (sector === "gov") {
      additionalInfo = {
        placeOfResidence: document.getElementById("urban-rural").value,
        diabetic: document.getElementById("diabetic").value,
        twin: document.getElementById("twin").value,
      };
      applicationFor = {
        application_for: document.getElementById("apply-for").value,
        sessions: document.getElementById("sessions").value,
        exam_medium: document.getElementById("medium").value,
        location_choice1: document.getElementById("location-1").value,
        location_choice2: document.getElementById("location-2").value,
        location_choice3: document.getElementById("location-3").value,
      };
      presentEmployment = {
        sector: document.getElementById("sector").value,
        office: document.getElementById("agency-office").value,
        office_address: document.getElementById("off-address").value,
        job_title: document.getElementById("position").value,
        years_worked: document.getElementById("job-years").value,
        currr_status: document.getElementById("status-emp").value,
      };
    } else {
      areaOfInterest = document.getElementById("area-interest").value;
      let companyName = document.getElementsByClassName("intern-comp");
      for (let i = 0; i < companyName.length; i += 1) {
        let newInternship = {
          company: companyName[i].value,
          title: document.getElementsByClassName("intern-title")[i].value,
          description: document.getElementsByClassName("intern-desc")[i].value,
          start_date: document.getElementsByClassName("int-start")[i].value,
          end_date: document.getElementsByClassName("int-end")[i].value,
        };
        internships.push(newInternship);
      }
      let workOrg = document.getElementsByClassName("work-org");
      for (let i = 0; i < workOrg.length; i += 1) {
        let newWorkExp = {
          organization: workOrg[i].value,
          position: document.getElementsByClassName("work-pos")[i].value,
          description: document.getElementsByClassName("work-desc")[i].value,
          start_date: document.getElementsByClassName("work-start")[i].value,
          end_date: document.getElementsByClassName("work-end")[i].value,
        };
        workExperiences.push(newWorkExp);
      }
      let pjtOrg = document.getElementsByClassName("pjt-org");
      for (let i = 0; i < pjtOrg.length; i += 1) {
        let newProject = {
          organization: pjtOrg[i].value,
          industry_institution:
            document.getElementsByClassName("pjt-indus")[i].value,
          description: document.getElementsByClassName("pjt-desc")[i].value,
          start_date: document.getElementsByClassName("pjt-start")[i].value,
          end_date: document.getElementsByClassName("pjt-end")[i].value,
        };
        projects.push(newProject);
      }
      let achievementNames = document.getElementsByClassName("achievement");
      for (let i = 0; i < achievementNames; i += 1) {
        let achieve_proof = document.getElementsByClassName("achieve-proof");
        let achieve_proof_url = null;
        if (achieve_proof[i].files[0] != null) {
          const imgRef = ref(
            storage,
            `achievement-proof/${i + 1}/${user.upc_id}`
          );
          await uploadBytes(imgRef, achieve_proof[i].files[0]);

          // console.log(await getDownloadURL(imgRef));
          achieve_proof_url = new URL(await getDownloadURL(imgRef));
          progress.current += 1;
          setX(Math.random());
        }
        let newAchievement = {
          achievement: achievementNames[i].value,
          proof: achieve_proof_url,
        };
        achievements.push(newAchievement);
      }
      let skillel = document.getElementsByClassName("skill");
      for (let i = 0; i < skillel.length; i += 1) {
        skills.push(skillel[i].value);
      }
      let activities = document.getElementsByClassName("cur-name");
      for (let i = 0; i < activities.length; i += 1) {
        let newExtraCurr = {
          activity_name: activities[i].value,
          position: document.getElementsByClassName("cur-pos")[i].value,
          description: document.getElementsByClassName("cur-desc")[i].value,
          start_date: document.getElementsByClassName("cur-start")[i].value,
          end_date: document.getElementsByClassName("cur-end")[i].value,
        };
        ExtraCurriculars.push(newExtraCurr);
      }
      publication = {
        title: document.getElementById("pub-title").value,
        author: document.getElementById("pub-author").value,
        publisher: document.getElementById("pub-publisher").value,
        year: document.getElementById("pub-year").value,
        pages: document.getElementById("pub-pages").value,
        volume: document.getElementById("pub-volume").value,
        journal: document.getElementById("pub-journal").value,
      };
      reference = {
        referee: document.getElementById("ref-referee").value,
        designation: document.getElementById("ref-designation").value,
        institute: document.getElementById("ref-inst").value,
        phone: document.getElementById("ref-ph").value,
        email: document.getElementById("ref-email").value,
      };
    }
    user.examsCleared = examsCleared;
    user.application_sector = application_sector;
    user.additionalInfo = additionalInfo;
    user.applicationFor = applicationFor;
    user.presentEmployment = presentEmployment;
    user.areaOfInterest = areaOfInterest;
    user.internships = internships;
    user.workExperiences = workExperiences;
    user.projects = projects;
    user.achievements = achievements;
    user.skills = skills;
    user.ExtraCurriculars = ExtraCurriculars;
    user.publication = publication;
    user.reference = reference;
    try {
      await axios
        .patch("https://t2bflnyx5i.execute-api.ap-south-1.amazonaws.com/prod/upc/api/v1/update", {
          user: user,
        })
        .then((res) => {
          console.log(res);
          alert(res.data.message);

          setUser(user);

          progress.current = 0;
          totalFiles.current = 0;
          setX(Math.random());
          location.reload();
        });
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
      nav("/");
    }
  };
  return (
    <div className="update-main">
      <h1>Update your profile </h1>
      <h4>Stay updated with latest exams and job opportunities</h4>
      <ExamCleared setX={setX} totalFiles={totalFiles} />
      <ApplyForSector setSector={setSector} />
      {(sector === "gov" || sector === "both") && <GovernmentApplicationInfo />}
      {(sector === "pvt" || sector === "both") && (
        <>
          {" "}
          <PrivateApplication1 />
          <PrivateApplication2 setX={setX} totalFiles={totalFiles} />
          <PrivateApplication3 />
        </>
      )}
      <div className="progress-bar" id="progress-bar">
        <div className="progress" id="progress">
          Files uploaded : {progress.current}/{totalFiles.current}
        </div>
      </div>
      <button className="submit-update" onClick={handleUpdate}>
        Submit
      </button>
    </div>
  );
};

export default Update;

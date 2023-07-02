import React, { useEffect, useState } from "react";
import "./Register.css";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import Address from "../Address/Address";
import Education from "../Education/Education";
import DocUpload from "../DocUpload/DocUpload";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";
import { parse, stringify, toJSON, fromJSON } from "flatted";

const Register = ({ nav, setUser }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    console.log(progress);
  }, [progress]);
  const handleRegister = async () => {
    const pass = document.getElementById("pass").value;
    const pass2 = document.getElementById("con-pass").value;
    if (pass !== pass2) {
      alert("password and confirm password must be same!!!");
    } else {
      //upc generation
      let upcNum = 0;
      let upcId = "";

      async function isDuplicate(id) {
        alert("checking duplicacy");
        await axios
          .get("http://localhost:9000/upc/api/v1/fetch", {
            params: { upc_id: id },
          })
          .then((res) => {
            console.log(res.data);
            if (!res.data) {
              return false;
            }
          });
      }

      async function generateUPC() {
        alert("genearting pass");
        let duplicate = true;
        while (duplicate) {
          upcNum = Math.floor(100000000 + Math.random() * 900000000);
          upcId = "UPC" + upcNum;
          console.log(upcId);

          duplicate = await isDuplicate(upcId);
          alert(duplicate);
        }
      }
      await generateUPC();

      //document upload

      alert("please wait while the files are being uploaded!");

      let ImpDocs = [
        { name: "User Image", url: null },
        { name: "User Signature", url: null },
        { name: "10th marksheet", url: null },
        { name: "12th marksheet", url: null },
        { name: "aadhar", url: null },
        { name: "pan", url: null },
        { name: "caste certificate", url: null },
      ];

      let userImg = document.getElementById("profile-pic-file");
      let userSign = document.getElementById("sign-file");
      let tenthMS = document.getElementById("mk10-file");
      let twelthMS = document.getElementById("mk12-file");
      let aadhar = document.getElementById("aadhar-file");
      let pan = document.getElementById("pan-file");
      let casteCert = document.getElementById("cast-file");

      if (userImg.files[0] != null) {
        const imgRef = ref(storage, `userImg/${upcId}`);
        await uploadBytes(imgRef, userImg.files[0]);

        console.log(await getDownloadURL(imgRef));
        ImpDocs[0].url = new URL(await getDownloadURL(imgRef));
        setProgress(progress + 100 / 7);
      }
      if (userSign.files[0] != null) {
        const imgRef = ref(storage, `userSign/${upcId}`);
        await uploadBytes(imgRef, userSign.files[0]);

        console.log(await getDownloadURL(imgRef));

        ImpDocs[1].url = new URL(await getDownloadURL(imgRef));
      }
      if (tenthMS.files[0] != null) {
        const imgRef = ref(storage, `tenthMS/${upcId}`);
        await uploadBytes(imgRef, tenthMS.files[0]);

        console.log(await getDownloadURL(imgRef));
        ImpDocs[2].url = new URL(await getDownloadURL(imgRef));
      }
      if (twelthMS.files[0] != null) {
        const imgRef = ref(storage, `twelthMS/${upcId}`);
        await uploadBytes(imgRef, twelthMS.files[0]);

        console.log(await getDownloadURL(imgRef));
        ImpDocs[3].url = new URL(await getDownloadURL(imgRef));
      }
      if (aadhar.files[0] != null) {
        const imgRef = ref(storage, `aadhar/${upcId}`);
        await uploadBytes(imgRef, aadhar.files[0]);

        console.log(await getDownloadURL(imgRef));
        ImpDocs[4].url = new URL(await getDownloadURL(imgRef));
      }
      if (pan.files[0] != null) {
        const imgRef = ref(storage, `pan/${upcId}`);
        await uploadBytes(imgRef, pan.files[0]);

        console.log(await getDownloadURL(imgRef));
        ImpDocs[5].url = new URL(await getDownloadURL(imgRef));
      }
      if (casteCert.files[0] != null) {
        const imgRef = ref(storage, `casteCert/${upcId}`);
        await uploadBytes(imgRef, casteCert.files[0]);

        console.log(await getDownloadURL(imgRef));
        ImpDocs[6].url = new URL(await getDownloadURL(imgRef));
      }

      //setting education details
      let education_details = [];
      let ed_stages = [
        "10th",
        "12th",
        "UG",
        "PG",
        "PG2",
        "Ph.D.",
        "Post Doc",
        "Any Other",
      ];
      const max = document.getElementsByClassName("max-cgpa");
      const subj = document.getElementsByClassName("exam-subj");
      const school = document.getElementsByClassName("edu-school");
      const board = document.getElementsByClassName("edu-board");
      const year = document.getElementsByClassName("edu-year");
      const mark = document.getElementsByClassName("edu-marks");
      const cgpa = document.getElementsByClassName("edu-cgpa");
      for (let i = 0; i < subj.length; i += 1) {
        let ed_obj = {
          exam_passed: ed_stages[i],
          subject_discipline: subj[i].value,
          institution: school[i].value,
          board_or_university: board[i].value,
          year: year[i].value,
          marks: mark[i].value,
          cgpa: cgpa[i].value,
          max_cgpa: max[i].value,
        };
        education_details.push(ed_obj);
      }
      let address_present = {
        address: document.getElementById("pres-address").value,
        country: document.getElementById("pres-country").value,
        state: document.getElementById("pres-state").value,
        city_or_village: document.getElementById("pres-city").value,
        district: document.getElementById("pres-district").value,
        pincode: document.getElementById("pres-pincode").value,
      };

      //user creation
      let newUser = {
        upc_id: upcId,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contactNo: document.getElementById("contact").value,
        alt_contact: document.getElementById("alt-contact").value,
        gender: document.getElementById("gender").value,
        DOB: document.getElementById("dob").value,
        father_name: document.getElementById("fname").value,
        mother_name: document.getElementById("mname").value,
        father_email: document.getElementById("femail").value,
        category: document.getElementById("category").value,
        nationality: document.getElementById("nation").value,
        pwd: document.getElementById("pwd").value,
        marital_status: document.getElementById("marital").value,
        id_type: document.getElementById("id-type").value,
        id_number: document.getElementById("id-num").value,
        address_present: address_present,
        address_permanent: {
          address: document.getElementById("perm-address").value,
          country: document.getElementById("perm-country").value,
          state: document.getElementById("perm-state").value,
          city_or_village: document.getElementById("perm-city").value,
          district: document.getElementById("perm-district").value,
          pincode: document.getElementById("perm-pincode").value,
        },
        education_details: education_details,
        password: pass,
        imp_docs: ImpDocs,
        examsCleared: [],
        application_sector: "gov",
        additionalInfo: null,
        applicationFor: null,
        presentEmployment: null,
        areaOfInterest: "",
        internships: [],
        workExperiences: [],
        projects: [],
        achievements: [],
        skills: [],
        ExtraCurriculars: [],
        publication: null,
        reference: null,
      };

      try {
        alert("trying to create");
        await axios
          .post(
            "http://localhost:9000/upc/api/v1/register",
            { user: newUser },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
            alert("User added successfully");
            setUser(newUser);
          });
      } catch (err) {
        console.log(err);
      }

      nav("/congrats");
    }
  };
  return (
    <div className="register-main">
      <h1>Register your profile </h1>
      <h4>Stay updated with latest exams and job opportunities</h4>
      <PersonalDetails />
      <Address />
      <Education />
      <DocUpload />
      <div className="pass-cont">
        <div className="input-box-cont">
          <div className="input-box">
            <label>Password :</label>
            <input type="password" name="pass" id="pass" required />
          </div>
          <div className="input-box">
            <label>Confirm Password :</label>
            <input type="password" name="con-pass" id="con-pass" required />
          </div>
        </div>
      </div>
      <div className="btn-cont">
        <button onClick={handleRegister}>Submit</button>
        <button id="prev-btn">Preview Profile</button>
      </div>
    </div>
  );
};

export default Register;

// user: {
//               upc_id: newUser.upc_id,
//               name: newUser.name,
//               email: newUser.email,
//               contactNo: newUser.contactNo,
//               alt_contact: newUser.alt_contact,
//               gender: newUser.gender,
//               DOB: newUser.gender,
//               father_name: newUser.father_name,
//               mother_name: newUser.mother_name,
//               father_email: newUser.father_email,
//               category: newUser.category,
//               nationality: newUser.nationality,
//               pwd: newUser.pwd,
//               marital_status: newUser.marital_status,
//               id_type: newUser.id_type,
//               id_number: newUser.id_number,
//               address_present: newUser.address_present,
//               address_permanent: newUser.address_permanent,
//               education_details: newUser.education_details,
//               password: newUser.password,
//               imp_docs: newUser.imp_docs,
//               examsCleared: newUser.examsCleared,
//               application_sector: newUser.application_sector,
//               additionalInfo: newUser.additionalInfo,
//               applicationFor: newUser.applicationFor,
//               presentEmployment: newUser.presentEmployment,
//               areaOfInterest: newUser.areaOfInterest,
//               internships: newUser.internships,
//               workExperiences: newUser.workExperiences,
//               projects: newUser.projects,
//               achievements: newUser.achievements,
//               skills: newUser.skills,
//               ExtraCurriculars: newUser.ExtraCurriculars,
//               publication: newUser.publication,
//               reference: newUser.reference,
//             },

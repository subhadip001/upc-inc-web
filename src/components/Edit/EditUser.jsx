import React, { useState } from "react";
import { useContext, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UserContext } from "../../App";

const Edituser = ({ setUser, setIsLoggedIn, user }) => {
  //   useEffect(() => {
  //     console.log(userNew.education_details[1].institution);
  //     alert(userNew.education_details[1].institution);
  //   });

  const LinkButton = ({ link }) => {
    const handleButtonClick = () => {
      window.open(link, '_blank'); // Open the link in a new tab
    };
  
    return <p onClick={handleButtonClick}>Visit Link</p>;
  };
  const progress = useRef(0);
  const [x, setX] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);
  const [cookies, setCookies, removeCookies] = useCookies([]);
  //   const userNew1 = useContext(userNewContext);
  const [userNew, setEditteduser] = useState(user);

  console.log(userNew);
  useEffect(() => {
    const verifyuser = async () => {
      if (!cookies.jwt) {
        nav("/login");
      } else {
        try {
          const response = await axios.post(
            "http://localhost:9000/upc/api/v1/check",
            {},
            { withCredentials: 'include' }
          );
  
          const data = response.data; // Get the data from the response object
          
  
          if (!data.status) {
            removeCookies("jwt");
            nav("/login");
          } else {
            setIsLoggedIn(true);
            setUser(data.user);
            setEditteduser(data.user);
            // console.log(user);
            // alert(user.upc_id);
          }
        } catch (err) {
          console.log(err);
          alert(err);
        }
      }
    };
    verifyuser();
  }, [cookies, setCookies, removeCookies]);
  
  const handleEdituser = async () => {
    //file uploading

    // let ImpDocs = [
    //     { name: "User Image", url: null },
    //     { name: "User Signature", url: null },
    //     { name: "10th marksheet", url: null },
    //     { name: "12th marksheet", url: null },
    //     { name: "aadhar", url: null },
    //     { name: "pan", url: null },
    //     { name: "caste certificate", url: null },
    //   ];

    let ImpDocs = userNew?.imp_docs;

    let userImg = document.getElementById("profile-pic-file");
    let userSign = document.getElementById("sign-file");
    let tenthMS = document.getElementById("mk10-file");
    let twelthMS = document.getElementById("mk12-file");
    let aadhar = document.getElementById("aadhar-file");
    let pan = document.getElementById("pan-file");
    let casteCert = document.getElementById("cast-file");

    if (userImg.files[0] != null) {
      const imgRef = ref(storage, `userImg/${userNew.upc_id}`);
      await uploadBytes(imgRef, userImg.files[0]);

      console.log(await getDownloadURL(imgRef));
      ImpDocs[0].url = new URL(await getDownloadURL(imgRef));

      progress.current += 1;
      setX(Math.random());
    }
    if (userSign.files[0] != null) {
      const imgRef = ref(storage, `userSign/${userNew.upc_id}`);
      await uploadBytes(imgRef, userSign.files[0]);

      console.log(await getDownloadURL(imgRef));

      ImpDocs[1].url = new URL(await getDownloadURL(imgRef));
      progress.current += 1;
      setX(Math.random());
    }
    if (tenthMS.files[0] != null) {
      const imgRef = ref(storage, `tenthMS/${userNew.upc_id}`);
      await uploadBytes(imgRef, tenthMS.files[0]);

      console.log(await getDownloadURL(imgRef));
      ImpDocs[2].url = new URL(await getDownloadURL(imgRef));
      progress.current += 1;
      setX(Math.random());
    }
    if (twelthMS.files[0] != null) {
      const imgRef = ref(storage, `twelthMS/${userNew.upc_id}`);
      await uploadBytes(imgRef, twelthMS.files[0]);

      console.log(await getDownloadURL(imgRef));
      ImpDocs[3].url = new URL(await getDownloadURL(imgRef));
      progress.current += 1;
      setX(Math.random());
    }
    if (aadhar.files[0] != null) {
      const imgRef = ref(storage, `aadhar/${userNew.upc_id}`);
      await uploadBytes(imgRef, aadhar.files[0]);

      console.log(await getDownloadURL(imgRef));
      ImpDocs[4].url = new URL(await getDownloadURL(imgRef));
      progress.current += 1;
      setX(Math.random());
    }
    if (pan.files[0] != null) {
      const imgRef = ref(storage, `pan/${userNew.upc_id}`);
      await uploadBytes(imgRef, pan.files[0]);

      console.log(await getDownloadURL(imgRef));
      ImpDocs[5].url = new URL(await getDownloadURL(imgRef));
      progress.current += 1;
      setX(Math.random());
    }
    if (casteCert.files[0] != null) {
      const imgRef = ref(storage, `casteCert/${userNew.upc_id}`);
      await uploadBytes(imgRef, casteCert.files[0]);

      console.log(await getDownloadURL(imgRef));
      ImpDocs[6].url = new URL(await getDownloadURL(imgRef));
      progress.current += 1;
      setX(Math.random());
    }
    setEditteduser({ ...userNew, imp_docs: ImpDocs });

    try {
      await axios
        .patch("http://localhost:9000/upc/api/v1/edit", {
          user: userNew,
          
        })
        .then((res) => {
          console.log(res);
          alert(res.data.message);

          // setUser(user);
          progress.current = 0;
          setTotalFiles(0);
          setX(Math.random());
          location.reload();
        });
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }
  };
  useEffect(() => {
    if (progress.current === 0) {
      document.getElementsByClassName("progress-bar")[0].style.display = "none";
    }
    if (progress.current >= 1) {
      // alert(progress);
      document.getElementsByClassName("progress-bar")[0].style.display =
        "block";
    }
    document.getElementsByClassName("progress")[0].style.width = `${
      (progress.current / totalFiles) * 100
    }%`;
  }, [progress.current]);
  return (
    <div className="register-main">
      <h1>Edit your profile </h1>
      <h4>Stay updated with latest exams and job opportunities</h4>
      <div className="personaldetail-sec">
        <h2>Personal Details</h2>
        <div className="input-box">
          <label>Candidate’s Name :</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Avoid using Mr , Mrs and other tiles "
            value={userNew.name}
            onChange={(e) => {
              setEditteduser({ ...userNew, name: e.target.value });
            }}
            required
          />
        </div>

        <div className="input-box">
          <label>Email Address :</label>
          <input
            type="email"
            name="email"
            id="email"
            value={userNew.email}
            onChange={(e) => {
              setEditteduser({ ...userNew, email: e.target.value });
            }}
            required
          />
        </div>

        <div className="input-box-cont">
          <div className="input-box">
            <label>Contact Number :</label>
            <input
              type="number"
              name="contact"
              id="contact"
              value={userNew.contactNo}
              onChange={(e) => {
                setEditteduser({ ...userNew, contactNo: e.target.value });
              }}
              required
            />
          </div>
          <div className="input-box">
            <label>Alternative Contact Number :</label>
            <input
              type="number"
              name="alt-contact"
              id="alt-contact"
              value={userNew.alt_contact}
              onChange={(e) => {
                setEditteduser({ ...userNew, alt_contact: e.target.value });
              }}
              required
            />
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Gender :</label>
            <select
              id="gender"
              value={userNew.gender}
              onChange={(e) => {
                setEditteduser({ ...userNew, gender: e.target.value });
              }}
              required
            >
              <option value="null">--Select Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-box">
            <label>Date Of Birth :</label>
            <input
              type="date"
              name="dob"
              id="dob"
              placeholder="--MM/DD/YYYY--"
              value={userNew.DOB}
              onChange={(e) => {
                setEditteduser({ ...userNew, DOB: e.target.value });
              }}
              required
            />
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Father’s Name :</label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Avoid using any tiles "
              value={userNew.father_name}
              onChange={(e) => {
                setEditteduser({ ...userNew, father_name: e.target.value });
              }}
              required
            />
          </div>
          <div className="input-box">
            <label>Mother’s Name :</label>
            <input
              type="text"
              name="mname"
              id="mname"
              placeholder="Avoid using any tiles "
              value={userNew.mother_name}
              onChange={(e) => {
                setEditteduser({ ...userNew, mother_name: e.target.value });
              }}
              required
            />
          </div>
        </div>
        <div className="input-box">
          <label>Father’s Email Address :</label>
          <input
            type="email"
            name="femail"
            id="femail"
            value={userNew.father_email}
            onChange={(e) => {
              setEditteduser({ ...userNew, father_email: e.target.value });
            }}
            required
          />
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>Category :</label>
            <select
              id="category"
              value={userNew.category}
              onChange={(e) => {
                setEditteduser({ ...userNew, category: e.target.value });
              }}
              required
            >
              <option value="null">--Select Category--</option>
              <option value="gen">General</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
              <option value="obc">OBC</option>
              <option value="ewc">EWC</option>
              <option value="other-min">Other minorities</option>
            </select>
          </div>
          <div className="input-box">
            <label>Nationality :</label>
            <input
              type="text"
              name="nation"
              id="nation"
              value={userNew.nationality}
              onChange={(e) => {
                setEditteduser({ ...userNew, nationality: e.target.value });
              }}
              required
            />
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>PwD :</label>
            <select
              id="pwd"
              value={userNew.pwd}
              onChange={(e) => {
                setEditteduser({ ...userNew, pwd: e.target.value });
              }}
              required
            >
              <option value="null">--Select Yes/No--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="input-box">
            <label>Marital Status :</label>
            <select
              id="marital"
              value={userNew.marital_status}
              onChange={(e) => {
                setEditteduser({
                  ...userNew,
                  marital_status: e.target.value,
                });
              }}
              required
            >
              <option value="unmarried">Unmarried</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
        </div>
        <div className="input-box-cont">
          <div className="input-box">
            <label>ID Type :</label>
            <select
              id="id-type"
              value={userNew.id_type}
              onChange={(e) => {
                setEditteduser({ ...userNew, id_type: e.target.value });
              }}
              required
            >
              <option value="pan">Pan Card</option>
              <option value="aadhar">Aadhar Card</option>
              <option value="passport">Passport</option>
              <option value="voterid">Voter ID</option>
            </select>
          </div>
          <div className="input-box">
            <label>ID Number :</label>
            <input
              type="text"
              name="id-num"
              id="id-num"
              placeholder="Avoid using Mr , Mrs and other tiles "
              value={userNew.id_number}
              onChange={(e) => {
                setEditteduser({ ...userNew, id_number: e.target.value });
              }}
              required
            />
          </div>
        </div>
      </div>
      <div className="address-sec">
        <div className="pres-address-sec">
          <h2>Present Address</h2>
          <div className="input-box">
            <label>Address :</label>
            <input
              type="text"
              name="pres-address"
              id="pres-address"
              value={userNew?.address_present?.address}
              onChange={(e) => {
                setEditteduser({
                  ...userNew,
                  address_present: {
                    ...userNew.address_present,
                    address: e.target.value,
                  },
                });
              }}
              required
            />
          </div>
          <div className="input-box-cont">
            <div className="input-box">
              <label>Country :</label>
              <input
                type="text"
                name="pres-country"
                id="pres-country"
                value={userNew?.address_present?.country}
                onChange={(e) => {
                  setEditteduser({
                    ...userNew,
                    address_present: {
                      ...userNew.address_present,
                      country: e.target.value,
                    },
                  });
                }}
                required
              />
            </div>
            <div className="input-box">
              <label>State :</label>
              <input
                type="text"
                name="pres-state"
                id="pres-state"
                value={userNew?.address_present?.state}
                onChange={(e) => {
                  setEditteduser({
                    ...userNew,
                    address_present: {
                      ...userNew.address_present,
                      state: e.target.value,
                    },
                  });
                }}
                required
              />
            </div>
          </div>
          <div className="input-box-cont">
            <div className="input-box">
              <label>City/Town/Village :</label>
              <input
                type="text"
                name="pres-city"
                id="pres-city"
                value={userNew?.address_present?.city_or_village}
                onChange={(e) => {
                  setEditteduser({
                    ...userNew,
                    address_present: {
                      ...userNew.address_present,
                      city_or_village: e.target.value,
                    },
                  });
                }}
                required
              />
            </div>
            <div className="input-box">
              <label>District:</label>
              <input
                type="text"
                name="pres-district"
                id="pres-district"
                value={userNew?.address_present?.district}
                onChange={(e) => {
                  setEditteduser({
                    ...userNew,
                    address_present: {
                      ...userNew.address_present,
                      district: e.target.value,
                    },
                  });
                }}
                required
              />
            </div>
          </div>
          <div className="input-box-cont">
            <div className="input-box">
              <label>Pincode :</label>
              <input
                type="text"
                name="pres-pincode"
                id="pres-pincode"
                value={userNew?.address_present?.pincode}
                onChange={(e) => {
                  setEditteduser({
                    ...userNew,
                    address_present: {
                      ...userNew.address_present,
                      pincode: e.target.value,
                    },
                  });
                }}
                required
              />
            </div>
          </div>
        </div>
        <div className="perm-address-sec">
          <h2>Permanent Address</h2>

          <div className="input-box">
            <label>Address :</label>
            <input
              type="text"
              name="perm-address"
              id="perm-address"
              value={userNew?.address_permanent?.address}
              onChange={(e) => {
                setEditteduser({
                  ...userNew,
                  address_permanent: {
                    ...userNew.address_permanent,
                    address: e.target.value,
                  },
                });
              }}
              required
            />
          </div>
          <div className="input-box-cont">
            <div className="input-box">
              <label>Country :</label>
              <input
                type="text"
                name="perm-country"
                id="perm-country"
                value={userNew?.address_permanent?.country}
                onChange={(e) => {
                  setEditteduser({
                    ...userNew,
                    address_permanent: {
                      ...userNew.address_permanent,
                      country: e.target.value,
                    },
                  });
                }}
                required
              />
            </div>
            <div className="input-box">
              <label>State :</label>
              <input
                type="text"
                name="perm-state"
                id="perm-state"
                value={userNew?.address_permanent?.state}
                onChange={(e) => {
                  setEditteduser({
                    ...userNew,
                    address_permanent: {
                      ...userNew.address_permanent,
                      state: e.target.value,
                    },
                  });
                }}
                required
              />
            </div>
          </div>
          <div className="input-box-cont">
            <div className="input-box">
              <label>City/Town/Village :</label>
              <input
                type="text"
                name="perm-city"
                id="perm-city"
                value={userNew?.address_permanent?.city_or_village}
                onChange={(e) => {
                  setEditteduser({
                    ...userNew,
                    address_permanent: {
                      ...userNew.address_permanent,
                      city_or_village: e.target.value,
                    },
                  });
                }}
                required
              />
            </div>
            <div className="input-box">
              <label>District:</label>
              <input
                type="text"
                name="perm-district"
                id="perm-district"
                value={userNew?.address_permanent?.district}
                onChange={(e) => {
                  setEditteduser({
                    ...userNew,
                    address_permanent: {
                      ...userNew.address_permanent,
                      district: e.target.value,
                    },
                  });
                }}
                required
              />
            </div>
          </div>
          <div className="input-box-cont">
            <div className="input-box">
              <label>Pincode :</label>
              <input
                type="text"
                name="perm-pincode"
                id="perm-pincode"
                value={userNew.address_permanent?.pincode}
                onChange={(e) => {
                  setEditteduser({
                    ...userNew,
                    address_permanent: {
                      ...userNew.address_permanent,
                      pincode: e.target.value,
                    },
                  });
                }}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ed-sec">
        <h2>Educational Details</h2>
        <div className="ed-detail-cont">
          <p>Examination/ Passed</p>
          <p>Discipline/ Subject</p>
          <p>School/ College</p>
          <p>Board/ University</p>
          <p>Year</p>
          <p>% Marks</p>
          <p>CGPA Obtained</p>
          <p>Max CGPA</p>
          <p>10th</p>
          <input
            type="text"
            className="exam-subj"
            value={userNew?.education_details?.[0]?.subject_discipline}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[0] || {}),
                subject_discipline: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  newEl,
                  ...userNew.education_details.slice(1),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-school"
            value={userNew?.education_details?.[0]?.institution}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[0] || {}),
                institution: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  newEl,
                  ...userNew.education_details.slice(1),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-board"
            value={userNew?.education_details?.[0]?.board_or_university}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[0] || {}),
                board_or_university: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  newEl,
                  ...userNew.education_details.slice(1),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-year"
            value={userNew?.education_details?.[0]?.year}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[0] || {}),
                year: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  newEl,
                  ...userNew.education_details.slice(1),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-marks"
            value={userNew?.education_details?.[0]?.marks}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[0] || {}),
                marks: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  newEl,
                  ...userNew.education_details.slice(1),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-cgpa"
            value={userNew?.education_details?.[0]?.cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[0] || {}),
                cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  newEl,
                  ...userNew.education_details.slice(1),
                ],
              });
            }}
          />
          <input
            type="number"
            className="max-cgpa"
            value={userNew?.education_details?.[0]?.max_cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[0] || {}),
                max_cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  newEl,
                  ...userNew.education_details.slice(1),
                ],
              });
            }}
          />
          <p>12th</p>
          <input
            type="text"
            className="exam-subj"
            value={userNew?.education_details?.[1]?.subject_discipline}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[1] || {}),
                subject_discipline: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  userNew.education_details[0] || {},
                  newEl,
                  ...userNew.education_details.slice(2),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-school"
            value={userNew?.education_details?.[1]?.institution}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[1] || {}),
                institution: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  userNew.education_details[0],
                  newEl,
                  ...userNew.education_details.slice(2),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-board"
            value={userNew?.education_details?.[1]?.board_or_university}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[1] || {}),
                board_or_university: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  userNew.education_details[0],
                  newEl,
                  ...userNew.education_details.slice(2),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-year"
            value={userNew?.education_details?.[1]?.year}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[1] || {}),
                year: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  userNew.education_details[0],
                  newEl,
                  ...userNew.education_details.slice(2),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-marks"
            value={userNew?.education_details?.[1]?.marks}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[1] || {}),
                marks: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  userNew.education_details[0],
                  newEl,
                  ...userNew.education_details.slice(2),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-cgpa"
            value={userNew?.education_details?.[1]?.cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[1] || {}),
                cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  userNew.education_details[0],
                  newEl,
                  ...userNew.education_details.slice(2),
                ],
              });
            }}
          />
          <input
            type="number"
            className="max-cgpa"
            value={userNew?.education_details?.[1]?.max_cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[1] || {}),
                max_cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  userNew.education_details[0],
                  newEl,
                  ...userNew.education_details.slice(2),
                ],
              });
            }}
          />
          <p>UG</p>
          <input
            type="text"
            className="exam-subj"
            value={userNew?.education_details?.[2]?.subject_discipline}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[2] || {}),
                subject_discipline: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 2),
                  newEl,
                  ...userNew.education_details.slice(3),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-school"
            value={userNew?.education_details?.[2]?.institution}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[2] || {}),
                institution: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 2),
                  newEl,
                  ...userNew.education_details.slice(3),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-board"
            value={userNew?.education_details?.[2]?.board_or_university}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[2] || {}),
                board_or_university: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 2),
                  newEl,
                  ...userNew.education_details.slice(3),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-year"
            value={userNew?.education_details?.[2]?.year}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[2] || {}),
                year: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 2),
                  newEl,
                  ...userNew.education_details.slice(3),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-marks"
            value={userNew?.education_details?.[2]?.marks}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[2] || {}),
                marks: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 2),
                  newEl,
                  ...userNew.education_details.slice(3),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-cgpa"
            value={userNew?.education_details?.[2]?.cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[2] || {}),
                cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 2),
                  newEl,
                  ...userNew.education_details.slice(3),
                ],
              });
            }}
          />
          <input
            type="number"
            className="max-cgpa"
            value={userNew?.education_details?.[2]?.max_cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[2] || {}),
                max_cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 2),
                  newEl,
                  ...userNew.education_details.slice(3),
                ],
              });
            }}
          />
          <p>PG</p>
          <input
            type="text"
            className="exam-subj"
            value={userNew?.education_details?.[3]?.subject_discipline}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[3] || {}),
                subject_discipline: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 3),
                  newEl,
                  ...userNew.education_details.slice(4),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-school"
            value={userNew?.education_details?.[3]?.institution}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[3] || {}),
                institution: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 3),
                  newEl,
                  ...userNew.education_details.slice(4),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-board"
            value={userNew?.education_details?.[3]?.board_or_university}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[3] || {}),
                board_or_university: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 3),
                  newEl,
                  ...userNew.education_details.slice(4),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-year"
            value={userNew?.education_details?.[3]?.year}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[3] || {}),
                year: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 3),
                  newEl,
                  ...userNew.education_details.slice(4),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-marks"
            value={userNew?.education_details?.[3]?.marks}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[3] || {}),
                marks: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 3),
                  newEl,
                  ...userNew.education_details.slice(4),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-cgpa"
            value={userNew?.education_details?.[3]?.cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[3] || {}),
                cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 3),
                  newEl,
                  ...userNew.education_details.slice(4),
                ],
              });
            }}
          />
          <input
            type="number"
            className="max-cgpa"
            value={userNew?.education_details?.[3]?.max_cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[3] || {}),
                max_cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 3),
                  newEl,
                  ...userNew.education_details.slice(4),
                ],
              });
            }}
          />
          <p>PG 2(If any)</p>
          <input
            type="text"
            className="exam-subj"
            value={userNew?.education_details?.[4]?.subject_discipline}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[4] || {}),
                subject_discipline: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 4),
                  newEl,
                  ...userNew.education_details.slice(5),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-school"
            value={userNew?.education_details?.[4]?.institution}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[4] || {}),
                institution: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 4),
                  newEl,
                  ...userNew.education_details.slice(5),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-board"
            value={userNew?.education_details?.[4]?.board_or_university}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[4] || {}),
                board_or_university: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 4),
                  newEl,
                  ...userNew.education_details.slice(5),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-year"
            value={userNew?.education_details?.[4]?.year}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[4] || {}),
                year: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 4),
                  newEl,
                  ...userNew.education_details.slice(5),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-marks"
            value={userNew?.education_details?.[4]?.marks}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[4] || {}),
                marks: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 4),
                  newEl,
                  ...userNew.education_details.slice(5),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-cgpa"
            value={userNew?.education_details?.[4]?.cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[4] || {}),
                cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 4),
                  newEl,
                  ...userNew.education_details.slice(5),
                ],
              });
            }}
          />
          <input
            type="number"
            className="max-cgpa"
            value={userNew?.education_details?.[4]?.max_cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[4] || {}),
                max_cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 4),
                  newEl,
                  ...userNew.education_details.slice(5),
                ],
              });
            }}
          />
          <p>Ph.D.</p>
          <input
            type="text"
            className="exam-subj"
            value={userNew?.education_details?.[5]?.subject_discipline}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[5] || {}),
                subject_discipline: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 5),
                  newEl,
                  ...userNew.education_details.slice(6),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-school"
            value={userNew?.education_details?.[5]?.institution}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[5] || {}),
                institution: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 5),
                  newEl,
                  ...userNew.education_details.slice(6),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-board"
            value={userNew?.education_details?.[5]?.board_or_university}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[5] || {}),
                board_or_university: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 5),
                  newEl,
                  ...userNew.education_details.slice(6),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-year"
            value={userNew?.education_details?.[5]?.year}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[5] || {}),
                year: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 5),
                  newEl,
                  ...userNew.education_details.slice(6),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-marks"
            value={userNew?.education_details?.[5]?.marks}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[5] || {}),
                marks: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 5),
                  newEl,
                  ...userNew.education_details.slice(6),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-cgpa"
            value={userNew?.education_details?.[5]?.cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[5] || {}),
                cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 5),
                  newEl,
                  ...userNew.education_details.slice(6),
                ],
              });
            }}
          />
          <input
            type="number"
            className="max-cgpa"
            value={userNew?.education_details?.[5]?.max_cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[5] || {}),
                max_cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 5),
                  newEl,
                  ...userNew.education_details.slice(6),
                ],
              });
            }}
          />
          <p>Post Doc</p>
          <input
            type="text"
            className="exam-subj"
            value={userNew?.education_details?.[6]?.subject_discipline}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[6] || {}),
                subject_discipline: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 6),
                  newEl,
                  ...userNew.education_details.slice(7),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-school"
            value={userNew?.education_details?.[6]?.institution}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[6] || {}),
                institution: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 6),
                  newEl,
                  ...userNew.education_details.slice(7),
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-board"
            value={userNew?.education_details?.[6]?.board_or_university}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[6] || {}),
                board_or_university: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 6),
                  newEl,
                  ...userNew.education_details.slice(7),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-year"
            value={userNew?.education_details?.[6]?.year}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[6] || {}),
                year: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 6),
                  newEl,
                  ...userNew.education_details.slice(7),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-marks"
            value={userNew?.education_details?.[6]?.marks}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[6] || {}),
                marks: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 6),
                  newEl,
                  ...userNew.education_details.slice(7),
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-cgpa"
            value={userNew?.education_details?.[6]?.cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[6] || {}),
                cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 6),
                  newEl,
                  ...userNew.education_details.slice(7),
                ],
              });
            }}
          />
          <input
            type="number"
            className="max-cgpa"
            value={userNew?.education_details?.[6]?.max_cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[6] || {}),
                max_cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 6),
                  newEl,
                  ...userNew.education_details.slice(7),
                ],
              });
            }}
          />
          <p>Any other</p>
          <input
            type="text"
            className="exam-subj"
            value={userNew?.education_details?.[7]?.subject_discipline}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[7] || {}),
                subject_discipline: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 7),
                  newEl,
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-school"
            value={userNew?.education_details?.[7]?.institution}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[7] || {}),
                institution: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 7),
                  newEl,
                ],
              });
            }}
          />
          <input
            type="text"
            className="edu-board"
            value={userNew?.education_details?.[7]?.board_or_university}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[7] || {}),
                board_or_university: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 7),
                  newEl,
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-year"
            value={userNew?.education_details?.[7]?.year}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[7] || {}),
                year: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 7),
                  newEl,
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-marks"
            value={userNew?.education_details?.[7]?.marks}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[7] || {}),
                marks: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 7),
                  newEl,
                ],
              });
            }}
          />
          <input
            type="number"
            className="edu-cgpa"
            value={userNew?.education_details?.[7]?.cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[7] || {}),
                cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 7),
                  newEl,
                ],
              });
            }}
          />
          <input
            type="number"
            className="max-cgpa"
            value={userNew?.education_details?.[7]?.max_cgpa}
            onChange={(e) => {
              const newEl = {
                ...(userNew.education_details[7] || {}),
                max_cgpa: e.target.value,
              };
              setEditteduser({
                ...userNew,
                education_details: [
                  ...userNew.education_details.slice(0, 7),
                  newEl,
                ],
              });
            }}
          />
        </div>
      </div>
      <div className="doc-sec">
        <h2>Documents Uploaded</h2>
        <div className="doc-grid-cont">
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#profile-pic-file").click();
              setTotalFiles(totalFiles + 1);
              
            }}
          >
            <input type="file" id="profile-pic-file" onChange={()=>document.querySelectorAll('.file-name')[0].innerHTML=document.querySelector("#profile-pic-file").files[0].name} hidden />
            <img src="profile.png" alt="userNew profile" />
            <h4>Upload your Picture</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 200kb</p>
          </div>
          <a style={{color:"navy",marginLeft:"15%"}} href={userNew?.imp_docs?.[0]?.url} target="blank" rel="noopener noreferrer" >{userNew?.imp_docs?.[0]?.url?"View Document":"No previous document"}</a>
          </div>
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#sign-file").click();
              setTotalFiles(totalFiles + 1);
              
            }}
          >
            <input type="file" id="sign-file" onChange={()=>document.querySelectorAll('.file-name')[1].innerHTML=document.querySelector("#sign-file").files[0].name} hidden />
            <img src="doc1.png" alt="document1" />
            <h4>Upload your Signature</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 50kb</p>
          </div>
          <a style={{color:"navy",marginLeft:"15%"}} href={userNew?.imp_docs?.[1]?.url} target="blank" rel="noopener noreferrer">{userNew?.imp_docs?.[1]?.url?"View Document":"No previous document"}</a>
          </div>
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#mk10-file").click();
              setTotalFiles(totalFiles + 1);
              
            }}
          >
            <input type="file" id="mk10-file" onChange={()=>document.querySelectorAll('.file-name')[2].innerHTML=document.querySelector("#mk10-file").files[0].name} hidden />
            <img src="doc1.png" alt="document1" />
            <h4>Upload 10th Marksheet</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 50kb</p>
            
          </div>
          <a style={{color:"navy",marginLeft:"15%"}} href={userNew?.imp_docs?.[2]?.url} target="blank" rel="noopener noreferrer">{userNew?.imp_docs?.[2]?.url?"View Document":"No previous document"}</a>
          </div>
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#mk12-file").click();
              setTotalFiles(totalFiles + 1);
              
            }}
          >
            <input type="file" id="mk12-file" onChange={()=>document.querySelectorAll('.file-name')[3].innerHTML=document.querySelector("#mk12-file").files[0].name} hidden />
            <img src="doc1.png" alt="document1" />
            <h4>Upload 12th Marksheet</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 50kb</p>
          </div>
          <a style={{color:"navy",marginLeft:"15%"}} href={userNew?.imp_docs?.[3]?.url} target="blank" rel="noopener noreferrer">{userNew?.imp_docs?.[3]?.url?"View Document":"No previous document"}</a>
          </div>
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#aadhar-file").click();
              setTotalFiles(totalFiles + 1);
              
            }}
          >
            <input type="file" id="aadhar-file" onChange={()=>document.querySelectorAll('.file-name')[4].innerHTML=document.querySelector("#aadhar-file").files[0].name} hidden />
            <img src="doc2.png" alt="document2" />
            <h4>Upload Aadhar Card</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 200kb</p>
          </div>
          <a style={{color:"navy",marginLeft:"15%"}} href={userNew?.imp_docs?.[4]?.url} target="blank" rel="noopener noreferrer">{userNew?.imp_docs?.[4]?.url?"View Document":"No previous document"}</a>
          
          </div>
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#pan-file").click();
              setTotalFiles(totalFiles + 1);
            }}
          >
            <input type="file" id="pan-file" onChange={()=>document.querySelectorAll('.file-name')[5].innerHTML=document.querySelector("#pan-file").files[0].name} hidden />
            <img src="doc2.png" alt="document2" />
            <h4>Upload Pan Card</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 50kb</p>
          </div>
          <a style={{color:"navy",marginLeft:"15%"}} href={userNew?.imp_docs?.[5]?.url} target="blank" rel="noopener noreferrer">{userNew?.imp_docs?.[5]?.url?"View Document":"No previous document"}</a>
          </div>
          <div>
          <div
            className="upload-file-card"
            onClick={() => {
              document.querySelector("#cast-file").click();
              setTotalFiles(totalFiles + 1);
              
            }}
          >
            <input type="file" id="cast-file" onChange={()=>document.querySelectorAll('.file-name')[6].innerHTML=document.querySelector("#cast-file").files[0].name} hidden />
            <img src="doc2.png" alt="document2" />
            <h4>Upload Cast Certificate</h4>
            <p className="file-name" style={{color:"maroon",marginBottom:'4%'}}>No file Chosen</p>
            <p>Less than 50kb</p>
          </div>
          <a style={{color:"navy",marginLeft:"15%"}} href={userNew?.imp_docs?.[6]?.url} target="blank" rel="noopener noreferrer">{userNew?.imp_docs?.[6]?.url?"View Document":"No previous document"}</a>
          </div>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress">
          Files uploaded : {progress.current}/{totalFiles}
        </div>
      </div>
      <button className="submit-update" onClick={handleEdituser}>
        Submit
      </button>
    </div>
  );
};

export default Edituser;

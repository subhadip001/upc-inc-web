import React, { useEffect, useState } from "react";
import "./ImportantLinks.css";
import Jobs from "../Jobs/Jobs";
import Results from "../Results/Results";
import AdmitCards from "../AdmitCards/AdmitCards";
import axios from "axios";

const ImportantLinks = () => {
  const btnIds = ["all", "job", "result", "admit"];
  const [id, setId] = useState(0);
  const [links,setLinks]=useState([])

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        await axios
          .get("https://t2bflnyx5i.execute-api.ap-south-1.amazonaws.com/prod/upc/api/v1/getLinks")
          .then((res) => {
            setLinks(res.data.links);
            // alert("links fetched!")
            // alert(res.data.links)
          });
      } catch (err) {
        // alert(err);
      }
    };
    fetchLinks();
    // alert(links)
  }, []);

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      let el = document.getElementById(btnIds[i]);
      el.className = "Imp-link";
    }
    let selectEl = document.getElementById(btnIds[id]);
    selectEl.className = "Imp-link-clicked";
  }, [id]);
  return (
    <div className="importantLinks">
      <div className="Imp-link-cont">
        <button
          id="all"
          className="Imp-link"
          onClick={() => {
            setId(0);
          }}
        >
          All
        </button>
        <button
          id="job"
          className="Imp-link"
          onClick={() => {
            setId(1);
          }}
        >
          Latest Jobs
        </button>
        <button
          id="result"
          className="Imp-link"
          onClick={() => {
            setId(2);
          }}
        >
          Results
        </button>
        <button
          id="admit"
          className="Imp-link"
          onClick={() => {
            setId(3);
          }}
        >
          Admit Card
        </button>
      </div>
      {id === 0 || id === 1 ? <Jobs links={links} /> : <></>}
      {id === 0 || id === 2 ? <Results links={links} /> : <></>}
      {id === 0 || id === 3 ? <AdmitCards links={links} /> : <></>}
    </div>
  );
};

export default ImportantLinks;

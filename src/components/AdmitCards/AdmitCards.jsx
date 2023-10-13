import React from "react";
import "./AdmitCards.css";

const AdmitCards = ({links}) => {
  // const admitcards = [
  //   "Nta CUET UG 2023",
  //   "UPCATET 2023",
  //   "IIT JEE Advanced",
  //   "JIPMAT 2023",
  //   "JIPMAT 2023",
  //   "Nta CUET UG 2023",
  //   "UPCATET 2023",
  //   "IIT JEE Advanced",
  //   "IIT JEE Advanced",
  //   "UPCATET 2023",
  //   "Nta CUET UG 2023",
  // ];

  const admitcards=links.filter((card)=>{return card.type=="admit"})

  return (
    <div className="admitcards-sec">
      <h1>Admit Cards</h1>
      <div className="ac-card-cont">
        {admitcards.map((admitcard) => {
          return <a href={admitcard.url} target="blank"><div className="ac-card">{admitcard.title}</div></a>;
        })}
      </div>
    </div>
  );
};

export default AdmitCards;

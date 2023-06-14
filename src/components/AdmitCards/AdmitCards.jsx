import React from "react";
import "./AdmitCards.css";

const AdmitCards = () => {
  const admitcards = [
    "Nta CUET UG 2023",
    "UPCATET 2023",
    "IIT JEE Advanced",
    "JIPMAT 2023",
    "JIPMAT 2023",
    "Nta CUET UG 2023",
    "UPCATET 2023",
    "IIT JEE Advanced",
    "IIT JEE Advanced",
    "UPCATET 2023",
    "Nta CUET UG 2023",
  ];
  return (
    <div className="admitcards-sec">
      <h1>Admit Cards</h1>
      <div className="ac-card-cont">
        {admitcards.map((admitcard) => {
          return <div className="ac-card">{admitcard}</div>;
        })}
      </div>
    </div>
  );
};

export default AdmitCards;

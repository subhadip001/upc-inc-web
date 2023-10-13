import React, { useContext } from "react";
import "./Hero.css";
import { UserContext } from "../../App";

const Hero = ({ nav, isLoggedIn }) => {
  const user = useContext(UserContext);
  const handleGetUPC = () => {
    if (isLoggedIn) {
      alert("you already have upc : " + user.upc_id);
    } else {
      nav("/register");
    }
  };
  return (
    <div className="hero-sec">
      <div className="hero-sec-info">
        <h1>Stay Informed,</h1>
        <h1>Stay Prepared</h1>
        <p className="text-[20px]">
          Ace <em className="not-italic text-blue-100">exams</em> with our
          updates
        </p>
        {isLoggedIn === false && (
          <button onClick={handleGetUPC}>Get UPC Code</button>
        )}
        {isLoggedIn === true && (
          <button onClick={handleGetUPC}>Know your UPC</button>
        )}

        <p className="text-[14px] w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="hero-img-cont ">
        <img
          src="young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink.jpg"
          alt="young student showing thumbs up"
        />
        <div className="floating-txt1 ">
          <em>150+ </em>Exams
        </div>
        <div className="floating-txt2 ">
          <em>13k+ </em>Vacancies
        </div>
        <div className="floating-txt3 ">
          <em>10k+ </em>Students
        </div>
      </div>
    </div>
  );
};

export default Hero;

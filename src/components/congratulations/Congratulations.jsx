import React, { useContext } from "react";
import "./Congratulations.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const Congratulations = () => {
  const nav = useNavigate();
  const user = useContext(UserContext);
  return (
    <div className="congrats-page">
      <h1>CONGRATULATIONS !</h1>
      <h3>Your UPC Code has been generated</h3>
      <h4>
        Your UPC -- <em id="upc-no">"{user.upc_id}"</em>
      </h4>
      <button onClick={() => nav("/login")}>Log In</button>
    </div>
  );
};

export default Congratulations;

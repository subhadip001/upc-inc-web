import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-sec" id="services">
      <h1>Our Services</h1>
      <div className="service-sub-sec">
        <h2>For Students</h2>
        <div className="card-grid">
          <div className="service-card">
            <h4>Form Filling Assistance</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore e.
            </p>
          </div>
          <div className="service-card">
            <h4>Job notification</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore e.
            </p>
          </div>
          <div className="service-card">
            <h4>Job Assistance</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore e.
            </p>
          </div>
        </div>
        <h2>For Exam Boards</h2>
        <div className="card-grid">
          <div className="service-card">
            <h4>Easy data Access via UPC</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore e.
            </p>
          </div>
          <div className="service-card">
            <h4>Data Monitoring</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore e.
            </p>
          </div>
          <div className="service-card">
            <h4>Recruitment Assistance</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore e.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

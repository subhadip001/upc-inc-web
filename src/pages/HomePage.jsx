import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/herosec/Hero";
import About from "../components/about/About";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default HomePage;

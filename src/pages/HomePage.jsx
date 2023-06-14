import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/herosec/Hero";
import About from "../components/about/About";
import Services from "../components/Our Services/Services";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default HomePage;

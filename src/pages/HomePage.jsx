import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/herosec/Hero";
import About from "../components/about/About";
import Services from "../components/Our Services/Services";
import ImportantLinks from "../components/Important Links/ImportantLinks";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ImportantLinks />
    </div>
  );
};

export default HomePage;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/herosec/Hero";
import About from "../components/about/About";
import Services from "../components/Our Services/Services";
import ImportantLinks from "../components/Important Links/ImportantLinks";
import Review from "../components/review/Review";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ImportantLinks />
      <Review />
    </div>
  );
};

export default HomePage;

import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";

import Languages from "./sections/Languages";
import Career from "./sections/Career";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Languages />
      <Career />
      <ShowcaseSection />
      <Footer />
    </>
  );
};

export default App;

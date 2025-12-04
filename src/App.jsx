import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";

import Languages from "./sections/Languages";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Languages />
      <ShowcaseSection />
      <Footer />
    </>
  );
};

export default App;

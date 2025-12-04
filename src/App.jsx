import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";

import Languages from "./sections/Languages";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Languages />
      <ShowcaseSection />
    </>
  );
};

export default App;

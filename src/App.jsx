import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
    </>
  );
};

export default App;

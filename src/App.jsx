import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import Footer from "./sections/Footer";
import SkillsPath from "./sections/Languages";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <SkillsPath />
      <ShowcaseSection />
      <Footer />
    </>
  );
};

export default App;

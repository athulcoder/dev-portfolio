import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <Footer />
    </>
  );
};

export default App;

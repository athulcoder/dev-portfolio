import React, { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Timeline from "./sections/Timeline";
import ShowcaseSection from "./sections/ShowcaseSection";
import TravelGallery from "./sections/TravelGallery";
import NavBar from "./components/NavBar";
import Languages from "./sections/Languages";
import Footer from "./sections/Footer";
import CustomCursor from "./components/CustomCursor";
import TerminalEffect from "./components/TerminalEffect";

import Achievements from "./sections/Achievements";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <main className="cursor-none">
      <CustomCursor />
      <TerminalEffect />
      <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <About />
      <Timeline />
      <Languages />
      <Achievements />
      <ShowcaseSection />
      <TravelGallery />
      <Footer />
    </main>
  );
};

export default App;

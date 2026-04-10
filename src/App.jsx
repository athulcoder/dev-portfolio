import React from "react";
import { ReactLenis } from 'lenis/react'
import Hero from "./sections/Hero";
import About from "./sections/About";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import MagneticCursor from "./components/MagneticCursor";

import Languages from "./sections/Languages";
import Career from "./sections/Career";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <MagneticCursor />
      <NavBar />
      <Hero />
      <About />
      <Languages />
      <Career />
      <ShowcaseSection />
      <Footer />
    </ReactLenis>
  );
};

export default App;

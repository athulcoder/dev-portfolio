import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);

    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const content = (
    <>
      <MagneticCursor />
      <NavBar />
      <Hero />
      <About />
      <Languages />
      <Career />
      <ShowcaseSection />
      <Footer />
    </>
  );

  // Disable Lenis smooth scroll on mobile — native scroll is faster and optimized
  if (isMobile) {
    return content;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {content}
    </ReactLenis>
  );
};

export default App;

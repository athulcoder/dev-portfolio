"use client";
import { useState, useEffect } from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

// Lightweight static grid for mobile — replaces the heavy 3D marquee
const MobileHeroGrid = () => {
  const mobileImages = [
    "/images/p1.png",
    "/images/p2.png",
    "/images/p3.png",
    "/images/p4.png",
  ];

  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-black/40 p-4 ring-1 ring-neutral-700/10 overflow-hidden">
      <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
        {mobileImages.map((src, i) => (
          <div key={i} className="aspect-video overflow-hidden rounded-xl">
            <img
              src={src}
              alt={`Project ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export function HeroCardBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);

    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (isMobile) {
    return <MobileHeroGrid />;
  }

  const images = [
    "/images/p1.png",
    "/images/p2.png",
    "/images/p3.png",
    "/images/p6.png",
    "/images/p2.png",
    "/images/p5.png",

    "/images/p7.png",
    "/images/p8.png",
    "/images/p9.png",
    "/images/p4.png",
    "/images/p5.png",

    "/images/p1.png",
    "/images/p2.png",
    "/images/p8.png",
    "/images/p4.png",
    "/images/p5.png",
    "/images/p6.png",

    "/images/p1.png",
    "/images/p6.png",

    "/images/p9.png",
    "/images/p4.png",
    "/images/p5.png",
    "/images/p1.png",
    "/images/p2.png",
    "/images/p3.png",
    "/images/p6.png",
  ];
  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-black p-2 ring-1 ring-neutral-700/10 ">
      <ThreeDMarquee images={images} />
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

// Lightweight static grid for mobile — replaces the heavy 3D marquee
const MobileHeroGrid = () => {
  const mobileImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-100/40 dark:bg-black/40 p-4 ring-1 ring-neutral-200 dark:ring-neutral-700/10 overflow-hidden">
      <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
        {mobileImages.map((src, i) => (
          <div key={i} className="aspect-video overflow-hidden rounded-xl">
            <img
              src={src}
              alt={`Project ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export function HeroCardBackground() {
  return (
    <div className="mx-auto w-full max-w-full h-[40vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center relative transition-transform duration-700 p-4">
      {/* Soft glowing ambient background */}
      <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-600/20 blur-[100px] rounded-full z-0 transform mix-blend-screen"></div>
      
      {/* The floating image/GIF */}
      <div className="relative z-10 w-full h-full flex justify-center items-center animate-in fade-in zoom-in duration-1000 ease-out">
        {/* Light mode GIF */}
        <img 
          src="/hero.gif" 
          alt="Hero Animation" 
          className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-all duration-700 ease-out mix-blend-multiply dark:hidden" 
        />
        {/* Dark mode GIF */}
        <img 
          src="/dark-hero.gif" 
          alt="Hero Animation Dark" 
          className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-all duration-700 ease-out mix-blend-screen hidden dark:block" 
        />
      </div>
    </div>
  );
}

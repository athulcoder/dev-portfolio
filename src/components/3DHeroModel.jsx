"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function HeroCardBackground() {
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

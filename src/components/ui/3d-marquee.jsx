import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
  images,
  className
}) => {
  const containerRef = useRef(null);

  // Split the images array into 4 equal parts
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  useGSAP(() => {
    // Column animations
    gsap.to(".marquee-col-even", {
      y: 100,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".marquee-col-odd", {
      y: -100,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Image hover effect
    const images = gsap.utils.toArray(".marquee-img");
    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        gsap.to(img, { y: -15, scale: 1.05, duration: 0.4, ease: "power2.out" });
      });
      img.addEventListener("mouseleave", () => {
        gsap.to(img, { y: 0, scale: 1, duration: 0.6, ease: "power2.inOut" });
      });
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className={cn(
        "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100 bg-black/40 backdrop-blur-3xl border border-white/5",
        className
      )}>
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d">
            {chunks.map((subarray, colIndex) => (
              <div
                key={colIndex + "marquee"}
                className={cn(
                  "flex flex-col items-start gap-8",
                  colIndex % 2 === 0 ? "marquee-col-even" : "marquee-col-odd"
                )}>
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="relative group" key={imageIndex + image}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <img
                      key={imageIndex + image}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className="marquee-img aspect-970/700 rounded-2xl object-cover ring-1 ring-white/10 hover:ring-white/30 transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                      width={970}
                      height={700} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(255, 255, 255, 0.1)",
          "--height": "1px",
          "--width": "100%",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.1)",
          maskComposite: "exclude"
        }
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-(--height) w-[calc(100%+var(--offset))]",
        "bg-white/10",
        "z-30",
        className
      )}></div>
  );
};

const GridLineVertical = ({
  className,
  offset
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(255, 255, 255, 0.1)",
          "--height": "100%",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(255, 255, 255, 0.1)",
          maskComposite: "exclude"
        }
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-(--width)",
        "bg-white/10",
        "z-30",
        className
      )}></div>
  );
};

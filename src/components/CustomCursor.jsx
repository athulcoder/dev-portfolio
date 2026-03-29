import React, { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useGSAP(() => {
    gsap.to('.custom-cursor', {
      x: position.x - 16,
      y: position.y - 16,
      duration: 0.1,
      ease: 'power3.out',
    });

    gsap.to('.custom-cursor', {
      scale: isPointer ? 1.5 : 1,
      backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      duration: 0.3,
    });
  }, [position, isPointer]);

  return (
    <div 
      className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full border border-white/20 pointer-events-none z-[9999] backdrop-blur-[2px] nm-convex"
      style={{ mixBlendMode: 'difference' }}
    />
  );
};

export default CustomCursor;

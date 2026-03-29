import React, { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import NeomorphicCard from './NeomorphicCard';

const TerminalEffect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState([
    'Initializing Athul Portfolio Core...',
    'Loading Neomorphic Modules...',
    'GSAP ScrollTrigger hooks: SUCCESS',
    'Ready for interaction.'
  ]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle with Ctrl + T or Meta + T
      if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo('.terminal-container', 
        { scale: 0.8, opacity: 0, y: 100 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex-center bg-black/50 backdrop-blur-sm">
      <NeomorphicCard className="w-[90%] md:w-[600px] h-[400px] nm-inset bg-[#1a1a1a] p-0 overflow-hidden terminal-container">
        <div className="bg-[#2a2a2a] p-2 flex items-center justify-between border-b border-white/5">
          <div className="flex gap-2 ml-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className="text-xs text-white/50 font-mono">athul-sabu-terminal — bash</p>
          <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white mr-2">×</button>
        </div>
        <div className="p-4 font-mono text-sm overflow-y-auto h-[calc(400px-33px)] space-y-1">
          {logs.map((log, i) => (
            <p key={i} className="text-green-400">
              <span className="text-blue-400">guest@athul:~$</span> {log}
            </p>
          ))}
          <p className="text-white animate-pulse">_</p>
        </div>
      </NeomorphicCard>
    </div>
  );
};

export default TerminalEffect;

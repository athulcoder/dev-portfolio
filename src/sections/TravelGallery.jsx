import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import NeomorphicCard from '../components/NeomorphicCard';

const travelPhotos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80', title: 'Mountain Escape' },
  { id: 2, src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80', title: 'Kyoto' },
  { id: 3, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80', title: 'Alpine Serenity' },
  { id: 4, src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80', title: 'Wildlife' },
  { id: 5, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80', title: 'Roadtrip' },
  { id: 6, src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80', title: 'Golden Gate' },
  { id: 7, src: 'https://images.unsplash.com/photo-1433086466718-243308646671?auto=format&fit=crop&q=80', title: 'Mist' },
  { id: 8, src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80', title: 'Paris' },
];

const TravelGallery = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    const list = scrollRef.current;
    if (!list) return;

    // Clone the list for infinite scroll
    const items = gsap.utils.toArray('.gallery-item');
    const totalWidth = items.length * 340; // Approx 300px + gap 40px

    gsap.to(list, {
      x: `-=${totalWidth / 2}`, 
      duration: 30, // Adjust speed
      ease: 'none',
      repeat: -1,
      onRepeat: () => {
        gsap.set(list, { x: 0 });
      }
    });
  }, []);

  return (
    <section id="travel" className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Travel Archives</h2>
        <p className="text-primary/70 text-lg">Exploring the world, one frame at a time.</p>
      </div>

      <div className="relative overflow-hidden w-full h-[500px] flex items-center">
        <div 
          ref={scrollRef} 
          className="flex gap-10 px-10"
          style={{ width: 'fit-content' }}
        >
          {/* Double the photos for smooth looping */}
          {[...travelPhotos, ...travelPhotos].map((photo, i) => (
            <div key={i} className="gallery-item w-[300px] md:w-[400px] h-[400px] flex-none group">
              <NeomorphicCard className="p-4 h-full transform transition-transform duration-500 group-hover:scale-[1.05] relative overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-x-4 bottom-4 p-4 bg-black/40 backdrop-blur-md rounded-2xl translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold">{photo.title}</p>
                </div>
              </NeomorphicCard>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for edge fading */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
};

export default TravelGallery;

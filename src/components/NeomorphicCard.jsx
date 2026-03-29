import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const NeomorphicCard = ({ 
  children, 
  className, 
  variant = 'flat',
  hover = true 
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'inset': return 'nm-inset';
      case 'convex': return 'nm-convex';
      default: return 'nm-flat';
    }
  };

  return (
    <div 
      className={cn(
        'rounded-3xl p-6 nm-transition',
        getVariantClass(),
        hover && 'hover:scale-[1.02] cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};

export default NeomorphicCard;

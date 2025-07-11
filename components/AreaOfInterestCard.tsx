
import React from 'react';
import { AreaOfInterest } from '../types';

interface AreaOfInterestCardProps {
  area: AreaOfInterest;
  animationDelay?: number;
}

const AreaOfInterestCard: React.FC<AreaOfInterestCardProps> = ({ area, animationDelay = 0 }) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col items-center text-center hover:-translate-y-1.5 animate-fadeInUp group"
      style={{ animationDelay: `${animationDelay + 0.3}s` }} // Add delay from section
    >
      <div className="mb-4 text-pink-500 transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-12">
        {area.icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{area.description}</p>
    </div>
  );
};

export default AreaOfInterestCard;
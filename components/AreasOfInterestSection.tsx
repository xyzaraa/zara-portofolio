import React from 'react';
import { AreaOfInterest } from '../types';
import { AREAS_OF_INTEREST } from '../constants';
import AreaOfInterestCard from './AreaOfInterestCard';

const AreasOfInterestSection: React.FC = () => {
  return (
    <section id="interests" className="py-16 sm:py-20 bg-teal-50 animate-fadeInUp" style={{ animationDelay: '0.2s' }}> {/* teal as soft sage proxy */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-teal-700 mb-4">
          Areas of Interest
        </h2>
        <p className="text-center text-gray-600 mb-10 sm:mb-12 text-sm sm:text-base">
          Some of the things I love working on and exploring.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {AREAS_OF_INTEREST.map((area: AreaOfInterest, index: number) => (
            <AreaOfInterestCard key={area.id} area={area} animationDelay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfInterestSection;
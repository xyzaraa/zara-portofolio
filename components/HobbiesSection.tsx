import React from 'react';
import { Hobby } from '../types';
import { HOBBIES } from '../constants';
import HobbyCard from './HobbyCard';

const HobbiesSection: React.FC = () => {
  return (
    <section id="hobbies" className="py-16 sm:py-20 bg-emerald-50 animate-fadeInUp" style={{ animationDelay: '0.6s' }}> {/* Soft sage/emerald background */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-emerald-700 mb-4">
          My Hobbies & Passions
        </h2>
        <p className="text-center text-gray-600 mb-10 sm:mb-12 text-sm sm:text-base">
          A few things I enjoy doing in my free time.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HOBBIES.map((hobby: Hobby, index: number) => (
            <HobbyCard key={hobby.id} hobby={hobby} animationDelay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
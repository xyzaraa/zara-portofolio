
import React from 'react';
import { PROFILE_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-stone-50/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm h-20">
      <div className="container mx-auto px-6 h-full">
        <nav className="flex justify-between items-center h-full">
          <a href="#profile" className="text-2xl font-bold text-pink-700 hover:text-pink-800 transition-colors">
            {PROFILE_INFO.name}
          </a>
          <div className="space-x-2 sm:space-x-4 md:space-x-6">
            <a href="#profile" className="text-xs sm:text-sm md:text-base text-gray-700 hover:text-pink-600 transition-all duration-200 font-medium transform hover:-translate-y-0.5 inline-block">About</a>
            <a href="#interests" className="text-xs sm:text-sm md:text-base text-gray-700 hover:text-pink-600 transition-all duration-200 font-medium transform hover:-translate-y-0.5 inline-block">Interests</a>
            <a href="#projects" className="text-xs sm:text-sm md:text-base text-gray-700 hover:text-pink-600 transition-all duration-200 font-medium transform hover:-translate-y-0.5 inline-block">Projects</a>
            <a href="#hobbies" className="text-xs sm:text-sm md:text-base text-gray-700 hover:text-pink-600 transition-all duration-200 font-medium transform hover:-translate-y-0.5 inline-block">Hobbies</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
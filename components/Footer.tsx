
import React from 'react';
import { PROFILE_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-100/80 text-center py-8 sm:py-10 mt-16 sm:mt-20">
      <p className="text-sm text-gray-700">
        &copy; {new Date().getFullYear()} {PROFILE_INFO.name}. All rights reserved.
      </p>
      <p className="text-xs text-pink-600 mt-1">
        Crafted with <span role="img" aria-label="heart">💖</span> and React
      </p>
    </footer>
  );
};

export default Footer;

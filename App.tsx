
import React from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import AreasOfInterestSection from './components/AreasOfInterestSection';
import LatestProjectsSection from './components/LatestProjectsSection';
import HobbiesSection from './components/HobbiesSection'; // New import
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main className="pt-20">
        <ProfileSection />
        <AreasOfInterestSection />
        <LatestProjectsSection />
        <HobbiesSection /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;

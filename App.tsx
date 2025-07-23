
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';


const App: React.FC = () => {

  return (
    <div className="text-[#EAEAEA] overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-4 md:px-8 lg:px-16">
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
      </main>
      <Contact />
    </div>
  );
};

export default App;
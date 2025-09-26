

import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import type { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const prevSelectedProjectRef = useRef<Project | null>(null);


  useEffect(() => {
    // This effect runs AFTER the render pass.
    // If the previous value was a project and the current value is null,
    // it means we just navigated back from a project detail page.
    if (prevSelectedProjectRef.current && selectedProject === null) {
      // The main page is now rendered, so we can find the #projects element.
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }

    // Update the ref to the current value for the next render.
    prevSelectedProjectRef.current = selectedProject;
  }, [selectedProject]);
;

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
  };

  return (
    <div className="text-[#EAEAEA] overflow-x-hidden">
      <Header />
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={handleBackToPortfolio} />
      ) : (
        <main className="container mx-auto px-4 md:px-8 lg:px-16">
          <Hero />
          <Services />
          <Skills />
          <Projects onProjectSelect={handleSelectProject} />
          <Experience />
          <Certificates />
        </main>
      )}
      <Contact />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
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
import { PROJECTS_DATA } from './constants';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = parseInt(hash.substring('#project-'.length), 10);
        const project = PROJECTS_DATA.find(p => p.id === projectId);
        setSelectedProject(project || null);
        if (project) window.scrollTo(0, 0);
      } else {
        setSelectedProject(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Handle initial page load with a potential hash
    handlePopState();

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);



  const handleSelectProject = (project: Project) => {
    // Setting state directly still gives a responsive UI
    setSelectedProject(project);
    // Then update the URL, adding a new history entry
    window.history.pushState({ projectId: project.id }, project.title, `#project-${project.id}`);
    window.scrollTo(0, 0);
  };

  const handleBackToPortfolio = () => {
    // This will trigger the popstate event and navigate back
    window.history.back();
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
      <footer className="text-center text-sm text-[#BDBDBD] py-6">
        &copy; {new Date().getFullYear()} Kiara Azzahra. All rights reserved.
      </footer>
    </div>
  );
};

export default App;

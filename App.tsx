
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
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = parseInt(hash.substring('#project-'.length), 10);
        const project = PROJECTS_DATA.find(p => p.id === projectId);
        setSelectedProject(project || null);
        if (project) window.scrollTo(0, 0);
      } else {
        setSelectedProject(null);
        // After state update, main page will render.
        // Wait for render before scrolling to a section anchor.
        setTimeout(() => {
          const currentHash = window.location.hash;
          if (currentHash && !currentHash.startsWith('#project-')) {
            const id = currentHash.substring(1);
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 100);
      }
    };

    window.addEventListener('popstate', handleHashNavigation);
    
    // Handle initial page load with a potential hash
    handleHashNavigation();

    return () => {
      window.removeEventListener('popstate', handleHashNavigation);
    };
  }, []);



  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    // Update URL, adding a new history entry
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

    </div>
  );
};

export default App;

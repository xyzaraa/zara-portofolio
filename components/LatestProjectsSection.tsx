import React from 'react';
import { Project } from '../types';
import { LATEST_PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const LatestProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-stone-50 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-700 mb-4">
          My Latest Projects
        </h2>
        <p className="text-center text-gray-600 mb-10 sm:mb-12 text-sm sm:text-base">
          A glimpse into my recent work and creations.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LATEST_PROJECTS.map((project: Project, index: number) => (
            <ProjectCard key={project.id} project={project} animationDelay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjectsSection;
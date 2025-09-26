import React, { useState, useMemo } from 'react';
import { PROJECT_CATEGORIES, PROJECTS_DATA } from '../constants';
import type { Project } from '../types';

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Categories') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
      </div>

      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap justify-center items-center gap-2 bg-[#303632] p-2 rounded-xl border border-solid border-[#4a5c4f] glow-border">
          {PROJECT_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-5 rounded-lg text-sm font-semibold transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-white text-[#242825]'
                  : 'bg-transparent text-[#BDBDBD] hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsToShow.map((project) => (
          <div
            key={project.id}
            onClick={() => onProjectSelect(project)}
            className="cursor-pointer block bg-[#303632] rounded-2xl overflow-hidden border border-solid border-[#4a5c4f] glow-border group transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {!showAll && filteredProjects.length > 6 && (
         <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="text-[#9EB991] font-semibold border-b-2 border-[#9EB991] hover:text-white hover:border-white transition-colors"
            >
              Show More
            </button>
         </div>
      )}
    </section>
  );
};

export default Projects;

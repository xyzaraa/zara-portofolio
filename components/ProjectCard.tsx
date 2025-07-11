import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
}

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="2" 
    stroke="currentColor" 
    className={className || "w-4 h-4 ml-1.5"}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6M18 6l-7.5 7.5" />
  </svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ project, animationDelay = 0 }) => {
  const isClickable = !!project.projectUrl && project.projectUrl !== '#';

  const cardContent = (
    <>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-52 sm:h-56 object-cover"
      />
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <p className="text-xs text-pink-600 font-semibold mb-1 uppercase tracking-wider">{project.date}</p>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{project.title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow mb-4">{project.description}</p>
        
        {/* Footer: either a link or tags */}
        <div className="mt-auto pt-3 border-t border-gray-200">
          {isClickable ? (
            <div className="text-pink-700 font-bold inline-flex items-center text-sm group-hover:text-pink-800 transition-colors">
              View Project
              <ExternalLinkIcon className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </div>
          ) : (
            project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-teal-100 text-teal-700 text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );

  const cardClasses = "bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 ease-out animate-fadeInUp group";
  const hoverClasses = "hover:scale-[1.03] hover:shadow-xl";


  if (isClickable) {
    return (
      <a
        href={project.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClasses} ${hoverClasses}`}
        style={{ animationDelay: `${animationDelay + 0.5}s` }}
        aria-label={`View project: ${project.title}`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      className={`${cardClasses} transform hover:scale-[1.03]`}
      style={{ animationDelay: `${animationDelay + 0.5}s` }}
    >
      {cardContent}
    </div>
  );
};

export default ProjectCard;
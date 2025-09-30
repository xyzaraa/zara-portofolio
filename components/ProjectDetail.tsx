import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import type { Project } from '../types';
import { LeftArrowIcon, GithubIcon } from './icons';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [mainImage, setMainImage] = useState(project.gallery[0] || project.imageUrl);
  const [isMounted, setIsMounted] = useState(false);
  const [readmeContent, setReadmeContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);

    const fetchReadme = async () => {
      if (!project.readmeUrl) {
        setError('No README file specified for this project.');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(project.readmeUrl);
        if (!response.ok) {
          throw new Error(`Could not load project details. (Status: ${response.status})`);
        }
        const markdown = await response.text();
        const html = await marked.parse(markdown);
        setReadmeContent(html as string);
      } catch (e: any) {
        setError(e.message || 'An error occurred while fetching the project details.');
        setReadmeContent('');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReadme();
  }, [project.readmeUrl]);

  return (
    <section className="min-h-screen container mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-12">
      <div className={`transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-[#BDBDBD] hover:text-white transition-colors mb-8 group"
        >
          <LeftArrowIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back To Main Page</span>
        </button>

        <header className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-[#9EB991] uppercase mb-2">{project.category}</p>
          <h1 className="text-5xl font-bold text-white tracking-tight">{project.title}</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-[#303632] p-4 rounded-2xl border border-solid border-[#4a5c4f] glow-border">
              <img src={mainImage} alt={project.title} className="w-full h-auto max-h-[500px] object-contain rounded-lg mb-4" />
              <div className="flex gap-2 justify-center">
                {project.gallery.map((img, index) => (
                  <button key={index} onClick={() => setMainImage(img)} className={`w-20 h-14 rounded-md overflow-hidden border-2 transition-colors ${mainImage === img ? 'border-[#9EB991]' : 'border-transparent hover:border-gray-500'}`}>
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* README Section */}
            <div className="bg-[#303632] p-6 rounded-2xl border border-solid border-[#4a5c4f] glow-border min-h-[200px]">
              <h2 className="text-2xl font-bold text-[#9EB991] mb-4">Project README</h2>
              {isLoading && (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-pulse text-center text-[#BDBDBD]">Loading...</div>
                </div>
              )}
              {error && (
                 <div className="text-center text-red-400 bg-red-900/20 p-4 rounded-lg">
                    <p className="font-bold">Gagal Memuat</p>
                    <p className="text-sm">{error}</p>
                </div>
              )}
              {!isLoading && !error && (
                <div
                  className="readme-content"
                  dangerouslySetInnerHTML={{ __html: readmeContent }}
                />
              )}
            </div>
            
            {/* Methodology */}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky top-28 self-start">
             <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#404642] hover:bg-[#505652] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md"
              >
                <GithubIcon className="w-6 h-6" />
                <span>View on GitHub</span>
              </a>
            <div className="bg-[#303632] p-6 rounded-2xl border border-solid border-[#4a5c4f] glow-border">
              <h3 className="text-xl font-bold text-[#9EB991] mb-4">Language Program</h3>
              <div className="bg-[#404642] text-white text-center py-2 px-4 rounded-md inline-block">
                {project.language}
              </div>
            </div>
            <div className="bg-[#303632] p-6 rounded-2xl border border-solid border-[#4a5c4f] glow-border">
              <h3 className="text-xl font-bold text-[#9EB991] mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map(tool => (
                  <span key={tool} className="bg-[#404642] text-white py-1 px-3 rounded-md text-sm">{tool}</span>
                ))}
              </div>
            </div>
                <div className="bg-[#303632] p-6 rounded-2xl border border-solid border-[#4a5c4f] glow-border">
              <h2 className="text-2xl font-bold text-[#9EB991] mb-4">Methodology</h2>
              <ul className="space-y-4">
                {project.methodology.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#404642] text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div>
                    <div>
                      <h4 className="font-semibold text-white">{step.title}</h4>
                      <p className="text-[#BDBDBD]">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
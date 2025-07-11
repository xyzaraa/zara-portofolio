
import React from 'react';
import { PROFILE_INFO } from '../constants';

const DownloadIcon: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="2" 
    stroke="currentColor" 
    className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-200 ease-in-out"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="min-h-[calc(100vh-5rem)] flex items-center bg-violet-50 animate-fadeInUp">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          {/* Left Column: Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img
              src={PROFILE_INFO.profileImageUrl}
              alt={`Profile picture of ${PROFILE_INFO.name}`}
              className="rounded-full w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover border-4 border-white shadow-lg animate-float"
              width="256" 
              height="256"
            />
          </div>

          {/* Right Column: Text Content (Intro, Experience, Skills, Resume) */}
          <div className="w-full md:w-2/3">
            <div className="space-y-5 text-gray-700">
              <p className="text-base sm:text-lg leading-relaxed">
                {PROFILE_INFO.introduction}
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                {PROFILE_INFO.experienceDetails}
              </p>

              {/* Skills & Resume Block */}
              <div className="mt-8 pt-6 border-t border-violet-200/75">
                <h2 className="text-xl sm:text-2xl font-bold text-violet-700 mb-5 sm:mb-6">
                  My Skills
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {PROFILE_INFO.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="bg-slate-200 text-slate-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-transform duration-200 ease-in-out hover:scale-110"
                      aria-label={`Skill: ${skill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a 
                  href={PROFILE_INFO.resumeUrl} 
                  className="bg-violet-600 text-white font-bold text-base sm:text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-violet-700 transform hover:scale-105 transition-all duration-300 ease-in-out inline-flex items-center group"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Download Resume"
                >
                  Download Resume
                  <DownloadIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
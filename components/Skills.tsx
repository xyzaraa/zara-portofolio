
import React, { useRef, useMemo } from 'react';
import type { Skill } from '../types';
import { SKILLS_DATA } from '../constants';
import { LeftArrowIcon, RightArrowIcon } from './icons';

const Skills: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  // Duplicate the skills data to create the looping effect.
  // useMemo ensures this is not recalculated on every render.
  const loopedSkills = useMemo(() => [...SKILLS_DATA, ...SKILLS_DATA], []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Skills</h2>
      </div>
      <div className="relative flex items-center">
        <button
          onClick={() => scroll('left')}
          className="absolute -left-4 z-10 p-2 rounded-full bg-[#303632]/50 hover:bg-[#404642] transition-colors"
          aria-label="Scroll left"
        >
          <LeftArrowIcon className="w-6 h-6 text-white" />
        </button>

        <div ref={scrollContainer} className="flex items-center gap-8 px-4 overflow-x-auto skill-carousel snap-x snap-mandatory">
          {loopedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`} // Use a unique key for duplicated items
              className="flex-shrink-0 snap-center flex items-center gap-4 bg-[#303632] py-3 px-6 rounded-xl border border-solid border-[#4a5c4f] glow-border"
            >
              {skill.icon}
              <span className="text-lg font-medium text-white">{skill.name}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute -right-4 z-10 p-2 rounded-full bg-[#303632]/50 hover:bg-[#404642] transition-colors"
          aria-label="Scroll right"
        >
          <RightArrowIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Skills;

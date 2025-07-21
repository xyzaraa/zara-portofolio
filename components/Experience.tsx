import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import type { ExperienceItem } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="flex gap-8">
    <div className="w-1/4 text-right pr-8">
      <h4 className="text-lg font-semibold text-white">{item.year}</h4>
    </div>
    <div className="relative w-3/4 pl-8 border-l-2 border-[#4a5c4f]">
      <div className="absolute -left-[10px] top-1 w-4 h-4 bg-[#242825] border-2 border-[#9EB991] rounded-full"></div>
      <div className="mb-8">
        <h3 className="text-xl font-bold text-[#9EB991]">{item.title}</h3>
        <p className="text-md text-[#BDBDBD] mb-4">{item.company}</p>
        <ul className="list-disc list-inside space-y-2 text-[#BDBDBD]">
          {item.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="mt-4 w-24 h-1 bg-[#9EB991] mx-auto rounded-full"></div>
      </div>
      <div className="flex flex-col gap-4">
        {EXPERIENCE_DATA.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;